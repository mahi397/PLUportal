const express = require("express");
const app = express();

const data = require("./dummy.json");

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log("app listening on port 5000");
});
