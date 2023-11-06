from flask.cli import AppGroup
from .users import seed_users, undo_users
from .menus import seed_menus, undo_menus
from .events import seed_events, undo_events

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


menu_data = [
    {
        'name': 'Strawberry Cheesecake',
        'price': 12.48,
        'image': 'https://i.imgur.com/JlaJCsC.png',
        'category': 'supah shakes',
        'ingredients': ["Cookies and cream", "Vanilla Protein", "Unflavored Fiber", "Sugar Free Chocolate Syrup", "Crumbled Oreos"],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Caramel Frappe',
        'price': 12.48,
        'image': 'https://i.imgur.com/ztejFxV.png',
        'category': 'supah shakes',
        'ingredients': ['Dulce de Leche', 'Cafe Latte', 'Vanilla Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Hint of Caramel Macchiato Iced Protein Coffee'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals", "Caffeine"],
        'weights': ["290", "7g", "26g", "10g", "35g", "21", "**80mg"]
    },
    {
        'name': 'Fruity Pebbles',
        'price': 12.48,
        'image': 'https://i.imgur.com/wgbRLl0.png',
        'category': 'supah shakes',
        'ingredients': ['Wild Berry', 'Orange Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Strawberry Sugar Free Syrup', 'Fruity Pebbles Cereal'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Mocha',
        'price': 12.48,
        'image': 'https://i.imgur.com/dlYvLPd.png',
        'category': 'supah shakes',
        'ingredients': ['Cafe Latte', 'Chocolate Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Hint Mocha Iced Protein Coffee'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals", "Caffeine"],
        'weights': ["290", "7g", "26g", "10g", "35g", "21", "**80mg"]
    },
    {
        'name': 'Pumpkin Banana',
        'price': 12.48,
        'image': 'https://i.imgur.com/navJkQh.png',
        'category': 'supah shakes',
        'ingredients': ['Banana Caramel', 'Pumpkin Spice', 'Peanut Cookie Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Granola (contains almonds)'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Key West',
        'price': 12.48,
        'image': 'https://i.imgur.com/x33uUVC.png',
        'category': 'supah shakes',
        'ingredients': ['Strawberry Cheesecake', 'Mango Pineapple', 'Vanilla Protein', 'Tropical Fiber', 'Strawberry Sugar Free Syrup', 'Fruity Pebbles Cereal'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Banana Split',
        'price': 12.48,
        'image': 'https://i.imgur.com/xBjA0ri.png',
        'category': 'supah shakes',
        'ingredients': ['Wild Berry', 'Banana Caramel', 'Vanilla Protein', 'Unflavored fiber', 'Chocolate Sugar Free Syrup', 'Granola (contains almonds)'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Minty Goodness',
        'price': 12.48,
        'image': 'https://i.imgur.com/rXFa6Sr.png',
        'category': 'supah shakes',
        'ingredients': ['Mint Chocolate', 'Vanilla Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Crumbled Oreos'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Mango Pina',
        'price': 12.48,
        'image': 'https://i.imgur.com/Cfrdj5e.png',
        'category': 'supah shakes',
        'ingredients': ['Pina Colada', 'Mango Pineapple', 'Vanilla Protein', 'Tropical Fiber', 'Honey', 'Hint Peach Mango Protein Juice'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Thin Mint',
        'price': 12.48,
        'image': 'https://i.imgur.com/oGVPTPo.png',
        'category': 'supah shakes',
        'ingredients': ['Mint Chocolate', 'Dutch Chocolate', 'Chocolate Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Crumbled Oreos'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Oreo Explosion',
        'price': 12.48,
        'image': 'https://i.imgur.com/ULbZFEm.png',
        'category': 'supah shakes',
        'ingredients': ['Cookies and cream', 'Vanilla Protein', 'Unflavored Fiber', 'Sugar Free Chocolate Syrup', 'Crumbled Oreos'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Brownie',
        'price': 12.48,
        'image': 'https://i.imgur.com/SbjMhDw.png',
        'category': 'supah shakes',
        'ingredients': ['Dutch Chocolate', 'Chocolate Protein', 'Unflavored Fiber', 'Chocolate Sugar Free Syrup', 'Chocolate chips'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Vanilla Bean',
        'price': 12.48,
        'image': 'https://i.imgur.com/SxalcOR.png',
        'category': 'supah shakes',
        'ingredients': ['French Vanilla', 'Cookies and Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Cinnamon', 'Whipped Cream (contains dairy)'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Banana Nut',
        'price': 12.48,
        'image': 'https://i.imgur.com/OeUkOf3.png',
        'category': 'supah shakes',
        'ingredients': ['Banana Caramel', 'Peanut Cookie Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Sliced Almonds'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Captain Crunch',
        'price': 12.48,
        'image': 'https://i.imgur.com/oGpZmR3.png',
        'category': 'supah shakes',
        'ingredients': ['Pina Colada', 'Pralines & Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Captain Crunch Cereal'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Rainbow',
        'price': 12.48,
        'image': 'https://i.imgur.com/R24juYG.png',
        'category': 'supah shakes',
        'ingredients': ['Pina Colada', 'Orange Cream', 'Vanilla Protein', 'Unflavored Fiber', 'Strawberry Sugar Free Syrup', 'Fruity Pebbles Cereal'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Cookie Dough',
        'price': 12.48,
        'image': 'https://i.imgur.com/L112lhV.png',
        'category': 'supah shakes',
        'ingredients': ['Dulce de Leche', 'Cookies and cream', 'Vanilla protein', 'Unflavored fiber', 'Caramel Sugar Free Syrup', 'Twix Powder'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },

    {
        'name': 'Caramel Pie',
        'price': 12.48,
        'image': 'https://i.imgur.com/SbVt1mA.png',
        'category': 'supah shakes',
        'ingredients': ['Dulce de Leche', 'Vanilla Protein', 'Apple Fiber', 'Caramel Sugar Free Syrup', 'Cinnamon'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals"],
        'weights': ["265", "5g", "24g", "10g", "32g", "21"]
    },
    {
        'name': 'Churro',
        'price': 12.48,
        'image': 'https://i.imgur.com/DsV3UjS.png',
        'category': 'supah shakes',
        'ingredients': ['Dulce de leche', 'Vanilla Protein', 'Unflavored Fiber', 'Chai Tea', 'Caramel Sugar Free Syrup', 'Cinnamon Toast Crunch Cereal'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals", "Caffeine"],
        'weights': ["270", "6g", "24g", "10g", "32g", "21", "**85mg"]
    },
    {
        'name': 'Toasted Pralines Latte',
        'price': 12.48,
        'image': 'https://i.imgur.com/ZrsJuKn.png',
        'category': 'supah shakes',
        'ingredients': ['Pralines & Cream', 'Cafe Latte', 'Vanilla Protein', 'Unflavored Fiber', 'Caramel Sugar Free Syrup', 'Hint House Blend Iced Protein Coffee'],
        'nutrients': ["Calories", "Fat", "Carb", "Fiber", "Protein", "Vitamins & Minerals", "Caffeine"],
        'weights': ["290", "7g", "26g", "10g", "35g", "21", "**80mg"]
    },
    {
        'name': 'Trusty Basic',
        'price': 12,
        'image': 'https://i.imgur.com/P8trVwn.png',
        'category': 'combos',
        'ingredients': ['Aloe', 'Tea', 'Shake']
    },
    {
        'name': 'Supah Basic',
        'price': 13,
        'image': 'https://i.imgur.com/HjEHIW9.png',
        'category': 'combos',
        'ingredients': ['Aloe', 'Tea', 'Supah']
    },
    {
        'name': 'Waffle Basic',
        'price': 13,
        'image': 'https://i.imgur.com/RGNES6s.png',
        'category': 'combos',
        'ingredients': ['Aloe', 'Tea', 'Waffle']
    },
    {
        'name': 'Protein Bowl Basic',
        'price': 15,
        'image': 'https://i.imgur.com/zgM5ZKz.png',
        'category': 'combos',
        'ingredients': ['Aloe', 'Tea', 'Protein Bowl']
    },
    {
        'name': 'VIP',
        'price': 14,
        'image': 'https://i.imgur.com/3JJtUQQ.png',
        'category': 'combos',
        'ingredients': ['SpecialTea', 'Shake']
    },
    {
        'name': 'Supah Special',
        'price': 16,
        'image': 'https://i.imgur.com/Bdb65Jq.png',
        'category': 'combos',
        'ingredients': ['SpecialTea', 'Supah']
    },
    {
        'name': 'Waffle Special',
        'price': 16,
        'image': 'https://i.imgur.com/tY1j9Fq.png',
        'category': 'combos',
        'ingredients': ['SpecialTea', 'Waffle']
    },
    {
        'name': 'Protein Bowl Special',
        'price': 18,
        'image': 'https://i.imgur.com/RnJlRG3.png',
        'category': 'combos',
        'ingredients': ['SpecialTea', 'Protein Bowl']
    },
    {
        'name': 'Smurfs Up',
        'price': 7.28,
        'image': 'https://i.imgur.com/miHjuwU.png',
        'category': 'special teas',
        'ingredients': ['Mango Aloe', 'Lemon Tea', 'Lemon Liftoff', 'Blue Blast & Blue Raspberry flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Sex on the Beach',
        'price': 7.28,
        'image': 'https://i.imgur.com/N2RZkBz.png',
        'category': 'special teas',
        'ingredients': ['Cranberry Aloe', 'Raspberry Tea', 'Orange Liftoff', 'Orange & Tropical Punch flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Sunset Crush',
        'price': 7.28,
        'image': 'https://i.imgur.com/rK5YBiJ.png',
        'category': 'special teas',
        'ingredients': ['Mango Aloe', 'Peach Tea', 'Tropical Liftoff', 'Orange & Peach flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Captain America',
        'price': 7.28,
        'image': 'https://i.imgur.com/en2djdN.png',
        'category': 'special teas',
        'ingredients': ['Cranberry Aloe', 'Raspberry Tea', 'Pomegranate Liftoff', 'Strawberry & Blue Blast flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Razzmatazz',
        'price': 7.28,
        'image': 'https://i.imgur.com/UwJyKd4.png',
        'category': 'special teas',
        'ingredients': ['Cranberry Aloe', 'Raspberry Tea', 'Lemon Liftoff', 'Lemon & Raspberry Lemonade flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Passion Fruit',
        'price': 7.28,
        'image': 'https://i.imgur.com/qpdKpgP.png',
        'category': 'special teas',
        'ingredients': ['Mango Aloe', 'Raspberry Tea', 'Pineapple Liftoff', 'Passion Fruit & Peach flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Fruit Rollup',
        'price': 7.28,
        'image': 'https://i.imgur.com/cj0EvzJ.png',
        'category': 'special teas',
        'ingredients': ['Mandarin Aloe', 'Raspberry Tea', 'Orange Liftoff', 'Watermelon & Strawberry flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Miami Vice',
        'price': 7.28,
        'image': 'https://i.imgur.com/FGIxeYj.png',
        'category': 'special teas',
        'ingredients': ['Mango Aloe', 'Raspberry Tea', 'Pineapple Liftoff', 'Coconut & Strawberry Flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Dragon Slayer',
        'price': 7.28,
        'image': 'https://i.imgur.com/fWeKFbd.png',
        'category': 'special teas',
        'ingredients': ['Mandarin Aloe', 'Original Tea', 'Blackberry Liftoff', 'Dragonfruit & Strawberry Kiwi flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Cucumberita',
        'price': 7.28,
        'image': 'https://i.imgur.com/flBX1d5.png',
        'category': 'special teas',
        'ingredients': ['Cranberry Aloe', 'Raspberry Tea', 'Pomegranate Liftoff', 'Rainbow Candy & Cucumber Lime flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Cosmo & Wanda',
        'price': 7.28,
        'image': 'https://i.imgur.com/lHl995K.png',
        'category': 'special teas',
        'ingredients': ['Cranberry Aloe', 'Lemon Tea', 'Pomegranate Liftoff', 'Tropical Punch & Green Apple flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Watermelon Splash',
        'price': 7.28,
        'image': 'https://i.imgur.com/DrSB6wf.png',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Mangorita',
        'price': 7.28,
        'image': 'https://i.imgur.com/SlhqKEa.png',
        'category': 'special teas',
        'ingredients': ['Cranberry Aloe', 'Raspberry Tea', 'Pomegranate Liftoff', 'Watermelon & Raspberry Lemonade flavors'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Cocomelon',
        'price': 7.28,
        'image': 'https://i.imgur.com/eME8cTE.png',
        'category': 'special teas',
        'ingredients': ["Mango Aloe", "Raspberry Tea", "Tropical Liftoff", "Coconut & Watermelon"],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Peach Please',
        'price': 7.28,
        'image': 'https://i.imgur.com/RfbXN1R.png',
        'category': 'special teas',
        'ingredients': ["Mango Aloe", "Peach Tea", "Orange Liftoff", "Peach & Orange"],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': 'Cotton Candy',
        'price': 7.28,
        'image': 'https://i.imgur.com/C6Lf7yY.png',
        'category': 'special teas',
        'ingredients': ["Mandarin Aloe", "Raspberry Tea", "Pomegranate Liftoff", "Watermelon & Rainbow Candy"],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': "Tropic Like It's Hot",
        'price': 7.28,
        'image': 'https://i.imgur.com/28iidMz.png',
        'category': 'special teas',
        'ingredients': ['Tea'],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': "Hulk",
        'price': 7.28,
        'image': 'https://i.imgur.com/uHxReBN.png',
        'category': 'special teas',
        'ingredients': ["Mango Aloe", "Peach Tea", "Tropical Liftoff", "Passion Fruit & Tropical Punch"],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': "Beach Bum",
        'price': 7.28,
        'image': 'https://i.imgur.com/1Wcg3M1.png',
        'category': 'special teas',
        'ingredients': ["Mandarin Aloe", "Peach Tea", "Pineapple Liftoff", "Orange & Strawberry"],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': "Grape-A-Liscious",
        'price': 7.28,
        'image': 'https://i.imgur.com/IEwFCxv.png',
        'category': 'special teas',
        'ingredients': ["Mandarin Aloe", "Raspberry Tea", "Pomegranate Liftoff", "Grape & Strawberry"],
        'nutrients': ["Calories", "Sugar", "Carb", "Vitamins & Minerals"],
        'weights': ["25", "0", "7g", "21"]
    },
    {
        'name': "Bad & Boujee",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['hydration', 'orange liftoff', 'original tea', 'pineapple', 'tropical punch', 'blue blast'],
        'nutrients':["Calories", "Carb", "Sugar", "Caffeine", "Vitamins & Minerals"],
        'weights':["80", "14g", "12g", "180mg", "21"]
    },
    {
        'name': "Great Scott",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['Lime liftoff (x2)', 'original tea', 'cranberry Aloe', 'lemonade', 'limeade', 'blue raspberry'],
        'nutrients':["Calories", "Carb", "Caffeine", "Vitamins & Minerals"],
        'weights':["40", "8g", "255mg", "21"]
    },
    {
        'name': "Summer Refresher",
        'price': 10.40,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['collagen', 'pom Liftoff', 'lemon tea', 'cranberry Aloe', 'margarita', 'watermelon', 'cranberry'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["45", "2g", "2g", "180mg", "21"]
    },
    {
        'name': "Triple Berry Blast",
        'price': 13.52,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['Collagen & protein juice', 'tropical liftoff', 'Raspberry tea', 'Cranberry Aloe', 'strawberry'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["115", "5g", "17g", "180mg", "21"]
    },
    {
        'name': "Feel Good",
        'price': 12.48,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['immunity & probiotics', 'Lime liftoff', 'relaxation tea', 'mandarin Aloe', 'lemonade', 'limeade'],
        'nutrients':["Calories", "Carb", "Caffeine", "Vitamins & Minerals"],
        'weights':["25", "7g", "75mg", "21"]
    },
    {
        'name': "Hydrating Hi-C",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['hydration', 'orange liftoff', 'lemon tea', 'mango aloe', 'limeade', 'mango'],
        'nutrients':["Calories", "Carb", "Sugar", "Caffeine", "Vitamins & Minerals"],
        'weights':["80", "14g", "12g", "180mg", "21"]

    },
    {
        'name': "Monster",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ["Aloe", "Tea", "Liftoff", "Hydration"],
        'nutrients':["Calories", "Carb", "Sugar", "Caffeine", "Vitamins & Minerals"],
        'weights':["70", "17g", "9g", "180mg", "21"]

    },
    {
        'name': "Pink Starburst",
        'price': 10.40,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['collagen & protein juice', 'pomegranate tea', 'mango Aloe', 'strawberry', 'watermelon'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["90", "5g", "17g", "45mg", "21"]
    },
    {
        'name': "Acai Refresher",
        'price': 12.48,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['electrolytes', 'pom liftoff', 'raspberry tea', 'cranberry Aloe', 'strawberry', 'acai berry'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["90", "5g", "17g", "180mg", "21"]
    },
    {
        'name': "Orange Starburst",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['Collagen & protein juice', 'orange liftoff', 'mandarin Aloe', 'orange pineapple'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["105", "9g", "17g", "75mg", "21"]
    },
    {
        'name': "Cran-Apple",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['bcaa', 'pom liftoff', 'raspberry tea', 'cranberry Aloe', 'cranberry', 'green apple']
    },
    {
        'name': "Strawberry Mango Daiquitea",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['collagen', 'tropical liftoff', 'lemon tea', 'Mango Aloe', 'margarita', 'strawberry', 'pineapple'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["40", "6g", "2g", "180mg", "21"]
    },
    {
        'name': "Firecracker",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['collagen', 'lime liftoff', 'pomegranate tea', 'cranberry Aloe', 'limeade', 'blue raspberry', 'cherry'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["40", "6g", "2g", "120mg", "21"]
    },
    {
        'name': "Pretty in Pink",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['collagen & protein juice', 'pom liftoff', 'pomegranate tea', 'watermelon'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["15", "4g", "17g", "120mg", "21"]
    },
    {
        'name': "Leaky Teaki",
        'price': 13.52,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['hydration & vitamin c boost', 'pineapple liftoff', 'mango Aloe', 'coconut', 'strawberry'],
        'nutrients':["Calories", "Carb", "Sugar", "Caffeine", "Vitamins & Minerals"],
        'weights':["90", "21g", "12g", "75mg", "21"]
    },
    {
        'name': "Emerald",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['protein juice', 'orange liftoff', 'original tea', 'mandarin Aloe', 'blue blast', 'pina colada'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["90", "7g", "15g", "180mg", "21"]
    },
    {
        'name': "Reborn",
        'price': 14.56,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['pom & blackberry liftoff & hydration', 'original tea', 'mandarin Aloe', 'Raspberry lemonade'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["95", "22g", "12g", "255mg", "21"]
    },
    {
        'name': "Goblet of Fire",
        'price': 10.40,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['hydration', 'orange liftoff', 'cranberry Aloe', 'cherry', 'watermelon'],
        'nutrients':["Calories", "Carb", "Sugar", "Caffeine", "Vitamins & Minerals"],
        'weights':["80", "18g", "12g", "75mg", "21"]
    },
    {
        'name': "Golden Snitch",
        'price': 10.40,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['protein juice', 'pineapple Liftoff', 'Mango Aloe', 'lemonade', 'pineapple'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["85", "7g", "15g", "75mg", "21"]
    },
    {
        'name': "Amorentia (Love Potion)",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['protein juice', 'pineapple Liftoff', 'Mango Aloe', 'lemonade', 'pineapple']
    },
    {
        'name': "Polyjuice Potion",
        'price': 13.52,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['pre-workout', 'blackberry liftoff', 'cranberry Aloe', 'grape', 'blue blast'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["105", "9g", "17g", "75mg", "21"]
    },
    {
        'name': "Sorcerer's Stone",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['hydration & protein juice', 'peach tea', 'Mango Aloe', 'mango', 'dragonfruit'],
        'nutrients':["Calories", "Carb", "Sugar", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["135", "17g", "12g", "15g", "105mg", "21"]
    },
    {
        'name': "Gryffindor",
        'price': 9.36,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['collagen', 'pom liftoff', 'pomegranate tea', 'lemonade', 'cherry'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["40", "6g", "2g", "180mg", "21"]
    },
    {
        'name': "Hufflepuff",
        'price': 11.44,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['protein juice', 'tropical liftoff', 'peach tea', 'mango Aloe', 'coconut', 'passion fruit'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["90", "7g", "15g", "180mg", "21"]
    },
    {
        'name': "Ravenclaw",
        'price': 10.40,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['collagen & bcaa', 'lemon tea', 'mandarin Aloe', 'margarita', 'blue blast'],
        'nutrients':["Calories", "Carb", "Protein", "Caffeine", "Vitamins & Minerals"],
        'weights':["50", "2g", "2g", "105mg", "21"]
    },
    {
        'name': "Slytherin",
        'price': 10.40,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'insaniteas',
        'ingredients': ['hydration', 'tropical liftoff', 'mango Aloe', 'orange pineapple', 'blue raspberry', 'blue blast'],
        'nutrients':["Calories", "Carb", "Sugar", "Caffeine", "Vitamins & Minerals"],
        'weights':["75", "18g", "12g", "75mg", "21"]
    },
    {
        'name': "Cafe con Leche",
        'price': 10.40,
        'image': 'https://i.imgur.com/228CAT7.png',
        'category': 'stays active',
        'ingredients': ['Protein Coffee', 'Prolessa Duo (fat reducer)'],
        'nutrients':["Calories", "Fat", "Carb", "Protein"],
        'weights':["170", "9g", "9g", "15g"]
    },
    {
        'name': "House Blend",
        'price': 5.20,
        'image': 'https://i.imgur.com/mWgX4NZ.png',
        'category': 'stays active',
        'ingredients': ['Protein Coffee', 'Prolessa Duo (fat reducer)'],
        'nutrients':["Calories", "Protein", "Sugar"],
        'weights':["100", "15g", "2g"]
    },
    {
        'name': "Mocha",
        'price': 5.20,
        'image': 'https://i.imgur.com/bIEFn1E.png',
        'category': 'stays active',
        'ingredients': ['Protein Coffee', 'Prolessa Duo (fat reducer)'],
        'nutrients':["Calories", "Protein", "Sugar"],
        'weights':["100", "15g", "2g"]
    },
    {
        'name': "Caramel Macchiato",
        'price': 5.20,
        'image': 'https://i.imgur.com/r8kcr0A.png',
        'category': 'stays active',
        'ingredients': ['Protein Coffee', 'Prolessa Duo (fat reducer)'],
        'nutrients':["Calories", "Protein", "Sugar"],
        'weights':["100", "15g", "2g"]
    },
    {
        'name': "Horchata / Venezuelan Chicha",
        'price': 14.56,
        'image': 'https://i.imgur.com/yHDrTcj.png',
        'category': 'stays active',
        'ingredients': ['Meal Shake', 'Protein', 'Prolessa Duo (fat reducer)'],
        'nutrients':["Calories", "Fat", "Carb", "Protein"],
        'weights':["270", "10g", "23g", "24g"]
    },
    {
        'name': "Pre-Workout",
        'price': 5.20,
        'image': 'https://i.imgur.com/9H3k3XG.png',
        'category': 'stays active',
        'ingredients': ['Caffeine', 'Creatine Monohydrate', 'Nitric Oxide Precursors'],
        'nutrients':["Calories", "Carb", "Vitamins & Minerals", "Caffeine", 'Creatine'],
        'weights':["60", "5g", "21", "100g", '5000mg']
    },
    {
        'name': "During-Workout",
        'price': 4.16,
        'image': 'https://i.imgur.com/ATz9baO.png',
        'category': 'stays active',
        'ingredients': ['Electrolites', 'Vitamin B1 & B12', 'Energy'],
        'nutrients':["Calories", "BCAA"],
        'weights':["25", "5g"]
    },
    {
        'name': "Post-Workout",
        'price': 6.24,
        'image': 'https://i.imgur.com/ni2Jsdg.png',
        'category': 'stays active',
        'ingredients': ['BCAAs', 'Whey Protein & Casein', 'L-Glutamine'],
        'nutrients':["Calories", "Fat", "Carb", "Protein"],
        'weights':["210", "2g", "15g", "33g"]
    },
    {
        'name': "Cake Pop",
        'price': 2.08,
        'image': 'https://i.imgur.com/MbpoPq7.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein', 'Dry Sugar Free Syrup Flavors'],
        'nutrients':["Calories", "Fat", "Carb", "Protein"],
        'weights':["42", "1g", "5g", "5g"]
    },
    {
        'name': "Protein Donuts (each)",
        'price': 3.12,
        'image': 'https://i.imgur.com/WLOTRLU.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein Baked Goods', 'Eggs', 'Almond Flour', 'Coconut Oil', 'Sweetener'],
        'nutrients':["Calories", "Fat", "Carb", "Fiber", "Protein"],
        'weights':["136", "10g", "10g", "3g", "5g"]
    },
    {
        'name': "Protein Churros",
        'price': 9.36,
        'image': 'https://i.imgur.com/1La8tvw.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein Baked Goods', 'Egg'],
        'nutrients':["Calories", "Fat", "Carb", "Fiber", "Protein"],
        'weights':["272", "9g", "18g", "3g", "30g"]
    },
    {
        'name': "Acai Bowl",
        'price': 13,
        'image': 'https://i.imgur.com/EiRbqQb.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein', 'Frozen Berries', 'Acai Powder & flavor', 'CR7'],
        'nutrients':["Calories", "Fat", "Carb", "Fiber", "Protein"],
        'weights':["307", "7g", "39g", "7g", "25g"]
    },
    {
        'name': "Monkey Bowl",
        'price': 13,
        'image': 'https://i.imgur.com/EiRbqQb.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein', 'PBfit', 'Fiber', 'Frozen Bananas'],
        'nutrients':["Calories", "Fat", "Carb", "Fiber", "Protein"],
        'weights':["365", "5g", "58g", "15g", "30g"]
    },
    {
        'name': "Tropical Fusion Bowl",
        'price': 13,
        'image': 'https://i.imgur.com/EiRbqQb.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein', 'Aloe', 'Fiber', 'Frozen Mangoes'],
        'nutrients':["Calories", "Fat", "Carb", "Fiber", "Protein"],
        'weights':["305", "4g", "48g", "11g", "25g"]
    },
    {
        'name': "Lava Shake",
        'price': 13.52,
        'image': 'https://i.imgur.com/fZklFqX.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein', 'Liftoff'],
        'nutrients':["Calories", "Fat", "Carb", "Protein"],
        'weights':["245", "5g", "29g", "25g"]
    },
    {
        'name': "Protein Waffles",
        'price': 11,
        'image': 'https://i.imgur.com/M0K7xkt.png',
        'category': 'more for you',
        'ingredients': ['Meal Shake', 'Protein Baked Goods', 'Egg', 'Oatmeal'],
        'nutrients':["Calories", "Fat", "Carb", "Fiber", "Protein"],
        'weights':["413", "11g", "45g", "8g", "35g"]
    },
    {
        'name': "Tea-Tox",
        'price': 8.32,
        'image': 'https://i.imgur.com/ddNiPBH.png',
        'category': 'more for you',
        'ingredients': ['Aloe', 'Tea', 'Probiotics', 'Fiber'],
        'nutrients':["Calories", "Carb", "Fiber"],
        'weights':["35-40", "9g", "6g"]
    },
    {
        'name': "ImmnuitiTea",
        'price': 8.32,
        'image': 'https://i.imgur.com/PB3DRSz.png',
        'category': 'more for you',
        'ingredients': ['Aloe Tea', 'Best Defense', 'Immunity Essentials'],
        'nutrients':["Calories", "Carb"],
        'weights':["35-40", "7g"]
    },
    {
        'name': "Up2U Jugs",
        'price': 26,
        'image': 'https://i.imgur.com/HnX2nlr.png',
        'category': 'more for you',
        'ingredients': ['Aloe', 'Tea', 'Collagen', 'H3O', 'Liftoff', 'Protein Juice', 'Fiber'],
        'nutrients':["Calories", "Carb", "Fiber", "Protein"],
        'weights':["305-315", "44g", "12g", "32g"]
    },
    {
        'name': "Protein Bars",
        'price': 3.12,
        'image': 'https://i.imgur.com/FcmWL1i.png',
        'category': 'more for you',
        'ingredients': ['Protein bar'],
        'nutrients':["Calories", "Protein"],
        'weights':["140", "10g"]
    },
    {
        'name': "Protein Bites",
        'price': 2.08,
        'image': 'https://i.imgur.com/FcmWL1i.png',
        'category': 'more for you',
        'ingredients': ['Protein bar'],
        'nutrients':["Calories", "Protein"],
        'weights':["60", "4g"]
    },
    {
        'name': "Soy Nuts",
        'price': 2.08,
        'image': 'https://i.imgur.com/YVFLi0e.jpg',
        'category': 'more for you',
        'ingredients': ['Soy', 'Nut'],
        'nutrients':["Calories", "Protein"],
        'weights':["100", "9g"]
    },
    {
        'name': "Prtein Juice",
        'price': 2.08,
        'image': 'https://i.imgur.com/H3KZaZU.png',
        'category': 'more for you',
        'ingredients': ['Protein Juice'],
        'nutrients':["Calories", "Protein"],
        'weights':["70", "15g"]
    },
    {
        'name': "Protein Shake",
        'price': 5,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'more for you',
        'ingredients': ['Protein', 'Soy'],
        'nutrients':["Calories", "Fat", "Carb", "Protein", "Vitamins & Minerals"],
        'weights':["130", "4g", "4g", "21g", "21"]
    },
    {
        'name': "Kid Refresher",
        'price': 5,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'goodies',
        'ingredients': ['Protein', 'Soy'],
        'nutrients':["Calories", "Sugar"],
        'weights':["0-5", "0g"]
    },
    {
        'name': "Kid Shakes",
        'price': 6.24,
        'image': 'https://i.imgur.com/LRnUbYY.jpg',
        'category': 'goodies',
        'ingredients': ['Protein', 'Soy'],
        'nutrients':["Calories", "Fat", "Carb", "Protein"],
        'weights':["90-145", "1-3g", "13-16g", "9-17g"]
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
