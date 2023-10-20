## Getting started
1. Clone this repository (only this branch)

Type the command:
```
$ node --version
```
You should be on node version 16, if you are not type:
```
$ nvm install 16
$ nvm use 16
```

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

