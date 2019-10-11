var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

router.get("/api", (req, res) => {
  res.send("Welcome to the API");
});

// get a list of classID
router.get("/classes", (req, res) => {
  db("SELECT * FROM classes ORDER BY dogID ASC;").then(results => {
    if (results.error) {
      // if there is an error
      // return an error
      res.status(500).send(results.error);
    } //
    res.send(results.data);
  });
});

module.exports = router;
