const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const auth = require("./Routes/auth");
const userRoute = require("./Routes/users");
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to database"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", auth);
app.use("/api/users", userRoute);

app.listen(1000, () => {
  console.log("backend is working");
});
