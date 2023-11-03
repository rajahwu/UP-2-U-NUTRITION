<div align="center">
   <img src="/vite-project/public/images/logo.png" with="200" height="200" justify="center"/>
</div>

<div align="center" justify="center">
   <h2>Up 2 U Nutrition allows users to make orders, view information, and see upcoming events directly from the restaurant! Check it out <a href=https://up-2-u-nutrition.onrender.com>here</a>!</h2>
![AWS](https://img.shields.io/badge/AWS-%23FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000?style=for-the-badge&logo=flask&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e?style=for-the-badge&logo=sqlite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88?style=for-the-badge&logo=redux&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011?style=for-the-badge&logo=github&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![cypress](https://img.shields.io/badge/cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Mocha](https://img.shields.io/badge/mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed?style=for-the-badge&logo=docker&logoColor=white)

</div>

# Contributors: 
<div>
<div id="badges" >
  <h4>Han Nguyen</h4>
  <a href=https://www.linkedin.com/in/han-nguyen-developer>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges">
  <h4>Vincent Radford</h4>
  <a href=https://www.linkedin.com/in/vincent-radford-1a9599173>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges">
    <h4>Tien Hoang</h4>
    <a href=https://www.linkedin.com/in/tien-hoang-6205b5281>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges">
  <h4>Daniel Blanco</h4>
  <a href=https://www.linkedin.com/in/blancodaniel>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges">
  <h4>Dave Sexton</h4>
  <a href=https://www.linkedin.com/in/dave-sexton-jr>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
</div>

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Rename the **.env.example** file to **.env** based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

