const express = require("express");
const router = express.Router();


// get
router.get("/", (req, res) => {
  res.send("I am get request for product...");
});

router.get("/details", (req, res) => {
  res.send("I am details request...");
});

// post
router.post("/", (req, res) => {
  res.send("I am POST request for product...");
});


module.exports = router;
