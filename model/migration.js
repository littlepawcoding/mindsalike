require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "mindsalike",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // create classes table
  let sql =
    "DROP TABLE if exists classes; CREATE TABLE classes(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `classes` was successful!");
  });
  // create dummy data for classes table
  sql =
    "INSERT INTO `classes` VALUES (1,'Puppy AM','6 week course for puppies','2020-01-01','10:00:00','2020-02-03','11:00:00',98,1,98,7,'Wheelhouse Vets')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Dummy data added to classes table");
  });
  // create dogs table
  sql =
    "DROP TABLE if exists dogs; CREATE TABLE dogs(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `dogs` was successful!");
  });
  // create dummy data for dogs table
  sql =
    "INSERT INTO `dogs` VALUES (1,'Dug','Cockerpoo',0,'2018-11-16',1,0,1,0,'n/a')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Dummy data added to dogs table");
  });
  // create owners table
  sql =
    "DROP TABLE if exists owners; CREATE TABLE owners(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `owners` was successful!");
  });
  //create dummy data for owners table
  sql =
    "INSERT INTO `owners` VALUES (1,1,'Kat','Creasy','kat@gmail.com',771926944,1,1)";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Dummy data added to owners table");
  });
  // create dog_classes pivot table
  sql =
    "DROP TABLE if exists dog_classes; CREATE TABLE dog_classes(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `dog_classes` was successful!");
  });
  // create dummy data for dog_classes pivot table
  sql = "INSERT INTO `dog_classes` VALUES (1,1,7,1)";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Dummy data added to dog_classes table");
  });

  con.end();
});
