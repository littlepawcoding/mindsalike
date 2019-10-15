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
router.get("/classes/:classID", (req, res) => {
  db(`SELECT * FROM classes WHERE classID=${req.params.classID};`).then(
    results => {
      if (results.error) {
        res.status(500).send(results.error);
      } //
      res.send(results.data);
    }
  );
});

// ENDPOINT 3) give me a list of the dogs taking classID 9
// localhost:5000/dog_classes/9;
router.get("/classes/:classID/dogs", (req, res) => {
  db(`SELECT * FROM dog_classes WHERE classID=${req.params.classID};`).then(
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
// localhost:5000/dogs/3;
router.get("/dogs/:dogID;", (req, res) => {
  db(`SELECT * FROM dogs WHERE dogID=${req.params.dogID};`).then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// ENDPOINT 6) give me a list of the classes dogID 1 is taking
// localhost:5000/dogs/5/classes
router.get("/dogs/:dogID/classes", (req, res) => {
  db(`SELECT * FROM dog_classes WHERE dogID=${req.params.dogID};`).then(
    results => {
      if (results.error) {
        res.status(500).send(results.error);
      } //
      res.send(results.data);
    }
  );
});

// joining table endpoint
router.get("/dogs/:dogID/classes", (req, res) => {
  db(`SELECT dc.*, d.dogName, c.className, o.ownerFirstName
      FROM dog_classes AS dc
      LEFT JOIN owners AS o
        ON dc.ownerID = o.ownerID
      LEFT JOIN dogs AS d
        ON dc.dogID = d.dogID
      LEFT JOIN classes AS c
        ON dc.classID = c.classID
          WHERE c.classID=${req.params.dogID};`).then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// select dc.*, d.dogName, c.className, o.ownerFirstName
// from dog_classes dc
// left join owners o
// 	on dc.ownerID = o.ownerID
// left join dogs d
// 	on dc.dogID = d.dogID
// left join classes c
// 	on dc.classID = c.classID
//     where c.classID = 7

module.exports = router;

// Endpoints:
// SELECT * FROM classes;
// SELECT * FROM classes WHERE classID=7;
// SELECT * FROM dog_classes WHERE classID=9 ORDER BY dogID;
// SELECT * FROM dogs;
// SELECT * FROM dogs WHERE dogID=5;
// SELECT * FROM dog_classes WHERE dogID=1 ORDER BY classID;

// Joining table endpoint:
// select dc.*, d.dogName, c.className, o.ownerFirstName
// from dog_classes dc
// left join owners o
// 	on dc.ownerID = o.ownerID
// left join dogs d
// 	on dc.dogID = d.dogID
// left join classes c
// 	on dc.classID = c.classID
//     where c.classID = 7
