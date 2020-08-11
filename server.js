const express = require("express");
const app = express();
const ENV_USER = process.env.ENV_USER;

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/", (req, res, next) => {
  res.status(200).send("Running!");
});
app.get("/health", (req, res, next) => {
  console.log('${ENV_USER}');
  res.status(200).send("${ENV_USER}, hope ur healthy?!");
});
