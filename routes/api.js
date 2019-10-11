var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

function sendItems(req, res) {
  // Send back the full list of items
  db("SELECT * FROM classes ORDER BY id ASC;").then(results => {
    if (results.error) {
      // if there is an error
      // return an error
      res.status(500).send(results.error);
    } // else send the data
    res.send(results.data);
  });
}

// get a list of classID
router.get("/api/classes", (req, res) => {
  res.send(results.data);
});

module.exports = router;
