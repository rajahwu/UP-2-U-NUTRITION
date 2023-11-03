<div align="center">
   <img src="/vite-project/public/images/logo.png" with="200" height="200" justify="center"/>
</div>

<div align="center" justify="center">
   <h2>Up 2 U Nutrition allows users to make orders, view information, and see upcoming events directly from the restaurant! Check it out <a href=https://up-2-u-nutrition.onrender.com>here</a>!</h2>
</div>

## Contributors:
<div>
<div id="badges" align="center">
  <h2>Han Nguyen</h2>
  <a href=https://www.linkedin.com/in/han-nguyen-developer>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges" align="center">
  <h2>Vincent Radford</h2>
  <a href=https://www.linkedin.com/in/vincent-radford-1a9599173/>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges" align="center">
    <h2>Tien Hoang</h2>
    <a href=https://www.linkedin.com/in/tien-hoang-6205b5281/>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges" align="center">
  <h2>Daniel Blanco</h2>
  <a href=https://www.linkedin.com/in/blancodaniel>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<div id="badges" align="center">
  <h2>Dave Sexton</h2>
  <a href=https://www.linkedin.com/in/dave-sexton-jr>
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
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

