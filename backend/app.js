/** @format */

const express = require("express");
const path = require("path");
app = express();

if (true) {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

app.get("/test", (req, res) => {
  res.send("test rout is working");
});

module.exports = app;