const express = require("express");
const app = express();

const product = require("./product");
// get

app.use("/product", product);

app.get("/", (req, res) => {
  res.send("Hii Welcome to our server");
});

const PORT = 8080;
app.listen(PORT, (req, res) => {
  console.log(`Server is runing on ${PORT}`);
});

// nodemon

/**
 * app. get is called when the HTTP method is set to GET,
 *
 *  whereas app. use is called regardless of the HTTP method, and therefore defines a layer which is on top of all the other RESTful types which the express packages gives you access to.
 */
