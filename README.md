# Minds Alike Database (MVP for CodeOp)

### My MVP

To store owner, dog and class information in a database, created in MySQL, then use Express to create queries.

## Objectives

- Build a database in MySQL
  - Create tables to store owner, dog and class information
  - Create an additional pivot table to connect them together
- Build API endpoints using MySQL and Express
  1. show a list of classes
  2. show a specific class using classID
  3. show a specific class using classID and the dogs taking that class
  4. show a list of dogs
  5. show a specific dog using dogID
  6. show a specific dog using dogID and the classes the dog is taking
- Test endpoints using Postman

#### Additional steps:

- Set up a migration file

### Database schema

![alt text](mindsalike_schema.png "Minds Alike DB Schema")

Link to DB Designer:
https://app.dbdesigner.net/designer/schema/274995

### API route plans

| URI                          | HTTP Method | Description                            | Req Object | Res Object |
| ---------------------------- | ----------- | -------------------------------------- | ---------- | ---------- |
| /classes                     | GET         | Get all data from classes              | none       | INT        |
| /classes/:classID            | GET         | Get list of specific class             | none       | INT        |
| /dog_classes/:classID/:dogID | GET         | Get list of dogs taking specific class | none       | INT        |
| /dogs                        | GET         | Get all data from dogs                 | none       | INT        |
| /dogs/:dogID                 | GET         | Get list of specific dog               | none       | INT        |
| /dog_classes/:dogID/:classID | GET         | Get class list for specific dog        | none       | INT        |

## Setup

**Please follow these steps to get setup:**

- Run `yarn` on root folder to install dependencies related to Express.

### Database Prep

- Create `.env` file in project directory and add

```
DB_NAME=mindsalike
DB_PASS={a password of your choosing}
```

- Run `node model/migration.js` in your **TERMINAL**.
- This will create four tables in your database called:
  - 'classes'
  - 'dogs'
  - 'owners'
  - 'dog_classes'

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express <br>
  _Port should start on Localhost:5000._
- Test your API in `http://localhost:5000`

## Resources

- [DB Designer (mindsalike Schema)](https://app.dbdesigner.net/designer/schema/274995)
- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
