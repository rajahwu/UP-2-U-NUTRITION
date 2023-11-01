from .db import db, environment, SCHEMA, add_prefix_for_prod
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

class Nutrition(db.Model):
    __tablename__ = 'nutritions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    nutrient = db.Column(db.String(5000), nullable=False)
    weight = db.Column(db.String())
    percentage = db.Column(db.String())

    menu_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('menu_items.id')), nullable=True)


    def __repr__(self):
        return f'<Nutrition {self.id}, {self.nutrient} {self.weight} {self.percentage}% was created>'


    def to_dict(self):
        return {
            'id':self.id,
            'nutrient':self.nutrient,
            'weight':self.weight,
            'percentage':self.percentage,
            'menu_id':self.menu_id
        }

