from .db import db, environment, SCHEMA, add_prefix_for_prod
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

class MenuItem(db.Model):
    __tablename__ = "menu_items"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(5000), nullable=False)
    category = db.Column(db.String(),nullable=False)
    price = db.Column(db.Float(), nullable=False)
    image = db.Column(db.String(), nullable=False)
    created_at = db.Column(db.Date(), nullable=False)

    ingredients = db.relationship('Ingredient',back_populates='menu_item',cascade = 'all, delete-orphan')
    nutritions = db.relationship('Nutrition',back_populates='menu_item', cascade = 'all, delete-orphan')

    def __repr__(self):
        return f'<MenuItem {self.id}, {self.name}, created Menu item #{self.id}'

    def to_dict(self):
        return {
            'id':self.id,
            'name':self.name,
            'category':self.category,
            'image' :self.image,
            'price':self.price,
            'created_at':self.created_at,
            'ingredients':[ingredient.to_dict() for ingredient in self.ingredients],
            'nutritions': [nutrient.to_dict() for nutrient in self.nutritions]
        }


