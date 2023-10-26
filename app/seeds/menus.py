from app.models import MenuItem,Ingredient,Nutrition, db, SCHEMA,environment
from sqlalchemy.sql import text
from datetime import datetime

def seed_menus():
    menu_item1 = MenuItem(
        name = "Strawberry Cheesecake",
        price = 17.99,
        image = "https://i.imgur.com/OJbcnTl.jpg",
        category = 'supah shakes',
        created_at = datetime.now()
    )

    ingredient_item1 = Ingredient(
        name = "Graham Cracker Crumbs",
        menu_id = 1
    )
    ingredient_item2 = Ingredient(
        name = "Strawberry Ice Cream",
        menu_id = 1
    )

    nutrition_item1 = Nutrition(
        nutrient = "Fat",
        menu_id = 1,
        weight = "10mg",
        percentage = 5
    )

    nutrition_item2 = Nutrition(
        nutrient = "Carb",
        menu_id = 1,
        weight = "50mg",
        percentage = 10
    )


    menu_item1.ingredients.extend([ingredient_item1,ingredient_item2])
    menu_item1.nutritions.extend([nutrition_item1,nutrition_item2])

    menu_item2 = MenuItem(
        name = "Chocolate Cheesecake",
        price = 15.99,
        image = "https://i.imgur.com/OJbcnTl.jpg",
        category = 'combos',
        created_at = datetime.now()
    )

    ingredient_item3 = Ingredient(
        name = "Cream Cheese",
        menu_id = 2
    )

    ingredient_item4 = Ingredient(
        name = "Blue Cheese",
        menu_id = 2
    )

    nutrition_item3 = Nutrition(
        nutrient = "Fat",
        menu_id = 2,
        weight = "15mg",
        percentage = 5
    )

    nutrition_item4 = Nutrition(
        nutrient = "Carb",
        menu_id = 2,
        weight = "550mg",
        percentage = 10
    )

    menu_item2.ingredients.extend([ingredient_item3,ingredient_item4])
    menu_item2.nutritions.extend([nutrition_item3,nutrition_item4])


    menuitems = [menu_item1,menu_item2]

    [db.session.add(menu_item) for menu_item in menuitems]
    db.session.commit()

def undo_menus():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM menu_items"))

    db.session.commit()
