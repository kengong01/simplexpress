const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/", (req, res, next) => {
  res.status(200).send("Running!");
});
app.get("/health", (req, res, next) => {
  res.status(200).send("${process.env.ENV_USER}, hope ur healthy?!");
});
