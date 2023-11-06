from flask import Blueprint, flash, request, jsonify
from flask_login import login_required, current_user
from datetime import date
from ..models.db import db
from ..models.menus import MenuItem, Ingredient, Nutrition
from ..forms.menu_form import MenuForm, IngredientForm, NutritionForm
from .aws_helpers import (
    upload_file_to_s3, get_unique_filename, remove_file_from_s3)


menu_item_routes = Blueprint('menu_items', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


@menu_item_routes.route("")
def all_items():
    menu_items = MenuItem.query.all()
    menu_list = [one_menu_item.to_dict() for one_menu_item in menu_items]

    return menu_list


@menu_item_routes.route("/<int:id>")
def single_menu_item(id):
    menu_item = MenuItem.query.get(id)
    menu_item_detail = menu_item.to_dict()
    res = {}
    res[menu_item_detail['id']] = menu_item_detail
    return res


@menu_item_routes.route("", methods=["POST"])
@login_required
def create_menu_item():

    form = MenuForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():

        image = form.data['image']
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print("====================upload:", upload)

        if 'url' not in upload:
            return {'error': 'Uh oh, fix the upload'}

        new_menu_item = MenuItem(
            name=form.data['name'],
            image=upload['url'],
            category=form.data['category'],
            price=form.data['price'],
            created_at=date.today(),
        )

        db.session.add(new_menu_item)
        db.session.commit()

        ingredient_list = form.data['ingredient_name'].split()
        for ingredient in ingredient_list:
            ingredient = Ingredient(
                ingredient_name=ingredient,
                menu_id=new_menu_item.id
            )
            db.session.add(ingredient)
            db.session.commit()

        nutrient_list = form.data['nutrient'].split(",")
        weight_list = form.data['weight'].split(",")

        for i in range(len(nutrient_list)):
            nutrient = nutrient_list[i]
            weight = weight_list[i]

            if nutrient.strip() != "" and weight.strip() != "":
                new_nutrition = Nutrition(
                    nutrient=nutrient,
                    weight=weight,
                    menu_id=new_menu_item.id
                )
                db.session.add(new_nutrition)
                db.session.commit()
            else:
                new_nutrition = None  # Assign None when the condition is not met

        return {"resMenuItem": new_menu_item.to_dict()}

    if form.errors:
        print("======== hitting form error", form.errors)
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@menu_item_routes.route("/<int:id>/ingredients", methods=["POST"])
# @login_required
def create_ingredient(id):
    ingredient_form = IngredientForm()
    ingredient_form["csrf_token"].data = request.cookies["csrf_token"]

    if ingredient_form.validate_on_submit():
        new_ingredient = Ingredient(
            ingredient_name=ingredient_form.data['ingredient_name'],
            menu_id=id
        )

        db.session.add(new_ingredient)
        db.session.commit()
        return {"resIngredient": new_ingredient.to_dict()}

    if ingredient_form.errors:
        return {"errors": validation_errors_to_error_messages(ingredient_form.errors)}, 400


@menu_item_routes.route("/<int:id>/nutritions", methods=["POST"])
# @login_required
def create_nutrition(id):
    nutrition_form = NutritionForm()
    nutrition_form["csrf_token"].data = request.cookies["csrf_token"]

    if nutrition_form.validate_on_submit():
        new_nutrient = Nutrition(
            nutrient=nutrition_form.data["nutrient"],
            weight=nutrition_form.data["weight"],
            menu_id=id
        )

        db.session.add(new_nutrient)
        db.session.commit()
        return {"resNutrition": new_nutrient.to_dict()}

    if nutrition_form.errors:
        return {"errors": validation_errors_to_error_messages(nutrition_form.errors)}, 400


@menu_item_routes.route("/<int:id>/update", methods=["PUT"])
@login_required
def update_menu_item(id):
    menu_item_form = MenuForm()

    menu_item_form["csrf_token"].data = request.cookies["csrf_token"]

    if menu_item_form.validate_on_submit():
        menu_item = MenuItem.query.get(id)

        menu_item.name = menu_item_form.data['name']
        menu_item.category = menu_item_form.data['category']
        menu_item.price = menu_item_form.data['price']
        menu_item.created_at = date.today()
        uploaded_image = menu_item_form.data['image']

        if uploaded_image:
            uploaded_image.filename = get_unique_filename(
                uploaded_image.filename)
            upload = upload_file_to_s3(uploaded_image)

            if 'url' not in upload:
                print("upload here =======", upload)
                return upload["errors"]

            # Remove the old image from S3
            remove_file_from_s3(menu_item.image)
            menu_item.image = upload['url']
        db.session.commit()

        ingredients = menu_item_form.data['ingredient_name'].split(",")

        # Fetch all existing ingredients for the menu item
        existing_ingredients = Ingredient.query.filter_by(menu_id=id).all()

        # Create a set of existing ingredient names for efficient comparison
        existing_ingredient_names = set(
            ingredient.ingredient_name for ingredient in existing_ingredients)

        # Iterate over the updated ingredients
        for ingredient_name in ingredients:
            if ingredient_name.strip() != "":
                if ingredient_name not in existing_ingredient_names:
                    # Ingredient is missing in the updated data, create a new ingredient
                    new_ingredient = Ingredient(
                        ingredient_name=ingredient_name,
                        menu_id=id
                    )
                    db.session.add(new_ingredient)

        # Iterate over the existing ingredients
        for existing_ingredient in existing_ingredients:
            if existing_ingredient.ingredient_name not in ingredients:
                # Existing ingredient is missing in the updated data, delete it
                db.session.delete(existing_ingredient)

        # Commit the changes to the database
        db.session.commit()

        # Handle nutrition updates
        nutrients = menu_item_form.data['nutrient']
        weights = menu_item_form.data['weight']

        if nutrients is not None:
            nutrients = nutrients.split(",")
        else:
            nutrients = []

        if weights is not None:
            weights = weights.split(",")
        else:
            weights = []

        existing_nutrients = Nutrition.query.filter_by(menu_id=id).all()

        # Determine the minimum length among the existing data and the incoming data
        min_length = min(len(nutrients), len(weights), len(existing_nutrients))

        for i in range(min_length):
            # Check if the incoming data is different from the existing data
            if (
                nutrients[i] != existing_nutrients[i].nutrient or
                weights[i] != existing_nutrients[i].weight
            ):
                # If different, replace with the incoming data
                existing_nutrients[i].nutrient = nutrients[i]
                existing_nutrients[i].weight = weights[i]

            # Check if the incoming data is empty and different, then delete
            elif nutrients[i].strip() == "" and weights[i].strip() == "":
                db.session.delete(existing_nutrients[i])

        # Add any additional values beyond the incoming data length and not empty
        for i in range(min_length, len(nutrients)):
            if nutrients[i].strip() != "" and weights[i].strip() != "":
                new_nutrition = Nutrition(
                    nutrient=nutrients[i],
                    weight=weights[i],
                    menu_id=id
                )
                db.session.add(new_nutrition)

        # Delete any extra existing data beyond the incoming data length
        for i in range(min_length, len(existing_nutrients)):
            db.session.delete(existing_nutrients[i])

        db.session.commit()

        return {"resMenuItem": menu_item.to_dict()}

    if menu_item_form.errors:
        print("============ error", menu_item_form.errors)
        return {"errors": validation_errors_to_error_messages(menu_item_form.errors)}, 400


@menu_item_routes.route("/<int:id>/delete", methods=['DELETE'])
@login_required
def delete_menu_item(id):
    menu_item = MenuItem.query.get(id)

    db.session.delete(menu_item)
    db.session.commit()
    return {"res": "Successfully deleted"}
