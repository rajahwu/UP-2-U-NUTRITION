<div align="center">
   <img src="/vite-project/public/images/logo.png" with="200" height="200" justify="center"/>
</div>
<br />
---
<div align='center'>
  
### Quick Links
  
<a href='https://projects.colegaw.in/well-app?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme'>
  
<img src='https://img.shields.io/badge/HOMEPAGE-gray?style=for-the-badge'>
  
</a>
  
<a href='https://projects.colegaw.in/well-app/research?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme'>
  
<img src='https://img.shields.io/badge/RESEARCH-blue?style=for-the-badge'>
  
</a>
  
<a href='https://projects.colegaw.in/well-app/case-study?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme'>
  
<img src='https://img.shields.io/badge/CASE STUDY-green?style=for-the-badge'>
  
</a>
  
<br />
  
<br />
  
<a href="https://www.producthunt.com/posts/well?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-well" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=322651&theme=light" alt="Well - Improve your productivity and happiness in just 21 days. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
  
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

