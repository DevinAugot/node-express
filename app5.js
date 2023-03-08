const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.listen(port, () => {
  console.log(`Simple app running on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  // static route
  res.send("the route is /new.");
});

app.get("/:id", (req, res) => {
  res.send(`The id is ${req.params.id}`);
});

app.get("/about", (req, res) => {
  res.render("about");
});
