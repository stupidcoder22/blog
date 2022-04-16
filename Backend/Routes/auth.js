const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");

//Registration
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashpass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// * this is login api
router.post("/login", async (req, res) => {
  try {
    const data = await User.find({ email: req.body.email });
    const tr = await bcrypt.compare(req.body.password, data[0].password);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
