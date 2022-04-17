const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const auth = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const categoryRoute = require("./Routes/categories");
const multer = require("multer");
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.use("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File have been uploaded");
});
app.use("/api/auth", auth);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(1000, () => {
  console.log("backend is working");
});
