from flask.cli import AppGroup
from .users import seed_users, undo_users
from .menus import seed_menus,undo_menus
from .events import seed_events,undo_events

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')



menu_data = [
    {
        'name': 'Strawberry Cheesecake',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ["Cookies and cream", "Vanilla Protein", "Unflavored Fiber", "Sugar Free Chocolate Syrup", "Crumbled Oreos"],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
    {
        'name': 'Caramel Frappe',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Dulce de Leche', 'Cafe Latte', 'Vanilla Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Hint of Caramel Macchiato Iced Protein Coffee'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals","Caffeine"],
        'weights': ["290", "7g", "26g", "10g","35g","21","**80mg"]
    },
    {
        'name': 'Fruity Pebbles',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Wild Berry', 'Orange Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Strawberry Sugar Free Syrup', 'Fruity Pebbles Cereal'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
    {
        'name': 'Mocha',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Cafe Latte', 'Chocolate Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Hint Mocha Iced Protein Coffee'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals","Caffeine"],
        'weights': ["290", "7g", "26g", "10g","35g","21","**80mg"]
    },
      {
        'name': 'Pumpkin Banana',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Banana Caramel', 'Pumpkin Spice', 'Peanut Cookie Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Granola (contains almonds)'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Key West',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Strawberry Cheesecake', 'Mango Pineapple', 'Vanilla Protein', 'Tropical Fiber', 'Strawberry Sugar Free Syrup', 'Fruity Pebbles Cereal'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Banana Split',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Wild Berry', 'Banana Caramel', 'Vanilla Protein', 'Unflavored fiber', 'Chocolate Sugar Free Syrup', 'Granola (contains almonds)'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Minty Goodness',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Mint Chocolate', 'Vanilla Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Crumbled Oreos'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Mango Pina',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Pina Colada', 'Mango Pineapple', 'Vanilla Protein', 'Tropical Fiber', 'Honey', 'Hint Peach Mango Protein Juice'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Thin Mint',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Mint Chocolate', 'Dutch Chocolate', 'Chocolate Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Crumbled Oreos'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Oreo Explosion',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Cookies and cream', 'Vanilla Protein', 'Unflavored Fiber', 'Sugar Free Chocolate Syrup', 'Crumbled Oreos'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Brownie',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Dutch Chocolate', 'Chocolate Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Chocolate chips'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Vanilla Bean',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['French Vanilla', 'Cookies and Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Cinnamon', 'Whipped Cream (contains dairy)'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Banana Nut',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Banana Caramel', 'Peanut Cookie Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Sliced Almonds'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Captain Crunch',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Pina Colada', 'Pralines & Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Captain Crunch Cereal'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Rainbow',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients':['Pina Colada', 'Orange Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Strawberry Sugar Free Syrup', 'Fruity Pebbles Cereal'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
      {
        'name': 'Cookie Dough',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients':['Dulce de Leche', 'Cookies and cream', 'Vanilla protein', 'Unflavored fiber', 'Caramel Sugar Free Syrup', 'Twix Powder'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },

      {
        'name': 'Caramel Pie',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients':['Dulce de Leche', 'Vanilla Protein', 'Apple Fiber', 'Caramel Sugar Free Syrup', 'Cinnamon'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g","32g","21"]
    },
       {
        'name': 'Churro',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients': ['Dulce de leche', 'Vanilla Protein', 'Unflavored Fiber', 'Chai Tea', 'Caramel Sugar Free Syrup', 'Cinnamon Toast Crunch Cereal'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals","Caffeine"],
        'weights': ["270", "6g", "24g", "10g","32g","21","**85mg"]
    },
      {
        'name': 'Toasted Pralines Latte',
        'price': 12.48,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'supah shakes',
        'ingredients':['Pralines & Cream', 'Cafe Latte', 'Vanilla Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Hint House Blend Iced Protein Coffee'],
        'nutrients': ["Calories","Fat", "Carb", "Fiber","Protein", "Vitamins & Minerals","Caffeine"],
        'weights': ["290", "7g", "26g", "10g","35g","21","**80mg"]
    },
      {
        'name': 'Trusty Basic',
        'price': 12,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['Aloe','Tea','Shake']
    },
      {
        'name': 'Supah Basic',
        'price': 13,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['Aloe','Tea','Supah']
    },
      {
        'name': 'Waffle Basic',
        'price': 13,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['Aloe','Tea','Waffle']
    },
      {
        'name': 'Protein Bowl Basic',
        'price': 15,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['Aloe','Tea','Protein Bowl']
    },
      {
        'name': 'VIP',
        'price': 14,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['SpecialTea','Shake']
    },
      {
        'name': 'Supah Special',
        'price': 16,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['SpecialTea','Supah']
    },
      {
        'name': 'Waffle Special',
        'price': 16,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['SpecialTea','Waffle']
    },
      {
        'name': 'Protein Bowl Special',
        'price': 18,
        'image': 'https://i.imgur.com/OJbcnTl.jpg',
        'category': 'combos',
        'ingredients':['SpecialTea','Protein Bowl']
    },
    {
        'name': 'Smurfs Up',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Sex on the Beach',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Sunset Crush',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Captain America',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Razzmatazz',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Passion Fruit',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Fruit Rollup',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Miami Vice',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Dragon Slayer',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Cucumberita',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Cosmo & Wanda',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Watermelon Splash',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Mangorita',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Cocomelon',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Peach Please',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': 'Cotton Candy',
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': "Tropic Like It's Hot",
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': "Hulk",
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': "Beach Bum",
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': "Grape-A-Liscious",
        'price': 7.28,
        'image': 'https://i.imgur.com/qM8XnTT.jpg',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories","Sugar"],
        'weights': ["25","0"]
    },
    {
        'name': "Cafe con Leche",
        'price': 8.32,
        'image': 'https://i.imgur.com/IRGbQqF.jpg',
        'category': 'more for you',
        'ingredients': ['Milk'],
        'nutrients': ["Calories","Fat", "Carb","Protein"],
        'weights': ["170","9g","9g","15g"]
    },
]

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        # undo_nutrition()
        # undo_ingredients()
        undo_menus()
        undo_events()
        undo_users()
    seed_users()
    seed_events()
    seed_menus(menu_data)
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_nutrition()
    # undo_ingredients()
    undo_menus()
    undo_events()
    undo_users()
    # Add other undo functions here
