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

  let sql =
    "DROP TABLE if exists classes; CREATE TABLE classes(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `classes` was successful!");

    console.log("Closing...");
  });

  con.end();
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists dogs; CREATE TABLE dogs(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `dogs` was successful!");

    console.log("Closing...");
  });

  con.end();
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists owners; CREATE TABLE owners(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `owners` was successful!");

    console.log("Closing...");
  });

  con.end();
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists dog_classes; CREATE TABLE dog_classes(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `dog_classes` was successful!");

    console.log("Closing...");
  });

  con.end();
});