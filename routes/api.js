const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

// ENDPOINT 1) give me all the data from classes
// localhost:5000/classes
router.get("/classes", (req, res) => {
  db("SELECT * FROM classes;").then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// ENDPOINT 2) give me a specific class with a certain id
// localhost:5000/classes/classID
// how can I get this so I can choose which class to view?
router.get("/classes/:classID", (req, res) => {
  db("SELECT * FROM classes WHERE classID=7;").then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// ENDPOINT 3) give me a list of the dogs taking classID 9
// localhost:5000/dog_classes/classID/dogID;
router.get("/dog_classes/:classID/:dogID", (req, res) => {
  db("SELECT * FROM dog_classes WHERE classID=9 ORDER BY dogID;").then(
    results => {
      if (results.error) {
        res.status(500).send(results.error);
      } //
      res.send(results.data);
    }
  );
});

// ENDPOINT 4) give me all the data from dogs
// localhost:5000/dogs
router.get("/dogs", (req, res) => {
  db("SELECT * FROM dogs;").then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// ENDPOINT 5) give me a specific dog with a certain id
// localhost:5000/dogs/dogID;
router.get("/dogs/:dogID;", (req, res) => {
  db("SELECT * FROM dogs WHERE dogID=5;").then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// ENDPOINT 6) give me a list of the classes dogID 1 is taking
// localhost:5000/dog_classes/dogID/classID;
router.get("/dog_classes/:dogID/:classID", (req, res) => {
  db("SELECT * FROM dog_classes WHERE dogID=1 ORDER BY classID;").then(
    results => {
      if (results.error) {
        res.status(500).send(results.error);
      } //
      res.send(results.data);
    }
  );
});

// Endpoints:
// SELECT * FROM classes;
// SELECT * FROM classes WHERE classID=7;
// SELECT * FROM dog_classes WHERE classID=9 ORDER BY dogID;
// SELECT * FROM dogs;
// SELECT * FROM dogs WHERE dogID=5;
// SELECT * FROM dog_classes WHERE dogID=1 ORDER BY classID;

module.exports = router;
