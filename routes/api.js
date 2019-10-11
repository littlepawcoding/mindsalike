var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

// get a list of classID
router.get("/api/classes", (req, res) => {
  res.send("List of classes");
});

module.exports = router;
