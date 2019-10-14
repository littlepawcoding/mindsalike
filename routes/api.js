const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

// endpoint 1) give me all the data from classes
router.get("/classes", (req, res) => {
  db("SELECT * FROM classes;").then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// endpoint 2) give me a specific class with a certain id
// router.get("/classes/:dogID", function(req, res) {
//   db("SELECT * FROM classes WHERE classID=7;").then,
//     function(results) {
//       res.send(results.data);
//     };
// });

router.get("/classes/:dogID", (req, res) => {
  db("SELECT * FROM classes WHERE classID=7;").then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

// My 6 endpoints:
// 1) give me all the data from classes
// SELECT * FROM classes;
// 2) give me the specific class with the id of 7
// SELECT * FROM classes WHERE classID=7;
// 3) give me a list of the dogs in class with id of 3
// SELECT * FROM dog_classes WHERE classID=3 ORDER BY dogID;
// 4) give me all the data from dogs
// SELECT * FROM dogs;
// 5) give me the specific class with the id of 5
// SELECT * FROM classes WHERE classID=5;
// 6) give me a list of the classes of dgos with the id of 1
// SELECT * FROM dog_classes WHERE dogID=1 ORDER BY classID;

module.exports = router;
