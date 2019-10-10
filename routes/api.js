var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

// create a function to prevent repeating code
function sendItems(req, res) {
  // Send back the full list of items
  db("SELECT * FROM items ORDER BY id ASC;").then(results => {
    if (results.error) {
      // if there is an error
      // return an error
      res.status(500).send(results.error);
    } // else send the data
    res.send(results.data);
  });
}

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.get("/todos", (req, res) => {
  // call the sendItems function to send back the full list of items
  sendItems(req, res);
});

// post - create new data
router.post("/todos", (req, res) => {
  // The request's body is available in req.body
  // If the query is successfull you should send back the full list of items
  // insert row into items with text (string) and complete (which would be like the checkbox)
  // values need to match, if two columns added then two values must be added
  db(`INSERT INTO items(text, complete) VALUES ("${req.body.input}", 0);`).then(
    results => {
      if (results.error) {
        res.status(500).send(results.error);
      }
      // call the sendItems function to send list of items
      sendItems(req, res);
    }
  );
});

// replace - we want to mark the completed as done
// not updating the whole item, just switching the info
// 0 not completed to 1 completed
router.put("/todos/:todo_id", (req, res) => {
  // The request's body is available in req.body
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of items
  // Add your code here
  // don't need quotes within ${} because it is a number
  db(
    `UPDATE items SET complete = !complete WHERE id = ${req.params.todo_id};`
  ).then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    }
    sendItems(req, res);
  });
});

router.delete("/todos/:todo_id", (req, res) => {
  // URL params are available in req.params
  // Add your code here
  db(`DELETE FROM items WHERE id = ${req.params.todo_id};`).then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    }
    sendItems(req, res);
  });
});

module.exports = router;
