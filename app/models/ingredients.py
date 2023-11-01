from .db import db, environment, SCHEMA, add_prefix_for_prod
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

class Ingredient(db.Model):
    __tablename__= 'ingredients'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    ingredient_name = db.Column(db.String(5000),nullable=False)
    menu_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('menu_items.id')), nullable=True)

    def __repr__(self):
        return f'<Ingredient {self.id}, {self.ingredient_name} was created>'

    def to_dict(self):
        return {
            'id':self.id,
            'ingredient_name':self.ingredient_name,
            'menu_id':self.menu_id
        }

    menu_item = db.relationship('MenuItem', back_populates='ingredients')
