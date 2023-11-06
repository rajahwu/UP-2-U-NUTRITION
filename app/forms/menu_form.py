from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField, IntegerField, DateField, FloatField
from wtforms.validators import DataRequired, Length, URL, ValidationError, Optional
from flask_wtf.file import FileAllowed, FileField, FileRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS


def text_length(form, field):
    # Checking if post length is correct
    text = field.data
    if len(text) > 2000 or len(text) < 5:
        raise ValidationError('Must be between 5 and 2000 characters')


class MenuForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    image = FileField('Image File', validators=[
                      FileAllowed(list(ALLOWED_EXTENSIONS)), Optional()])
    category = StringField('Category')
    price = FloatField('Price')
    ingredient_name = StringField('Ingredient_name')
    nutrient = StringField('Nutrient')
    weight = StringField('Weight')
    created_at = DateField('Date')
    submit = SubmitField('Submit')


class IngredientForm(FlaskForm):
    ingredient_name = StringField('Ingredient_name')
    submit = SubmitField('Submit')


class NutritionForm(FlaskForm):
    nutrient = StringField('Nutrient')
    weight = StringField('Weight')
    submit = SubmitField('Submit')
