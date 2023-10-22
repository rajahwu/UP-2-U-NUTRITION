from .db import db, environment, SCHEMA, add_prefix_for_prod
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

class Menu(db.Model):
    __tablename__ = "menus"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')),nullable= False)
    name = db.Column(db.String(), nullable=False)
    ingredients = db.Column(db.String(), nullable=False)
    created_at = db.Column(db.Date(), nullable=False)

    user = db.relationship('User', back_populates = 'menus')

    def __repr__(self):
        return f'<User {self.id}, {self.user.username}, created Menu item #{self.id}'

    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'ingredients':self.ingredients,
            'user_id':self.user_id,
            'user':{
                'id':self.user.id,
                'username':self.user.username
            }
        }
