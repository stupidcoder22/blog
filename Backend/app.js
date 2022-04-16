const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to database"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hiii");
});
app.listen(1000, () => {
  console.log("backend is working");
});
