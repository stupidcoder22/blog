const router = require("express").Router();
const Category = require("../Models/Category");

//* create categories
router.post("/", async (req, res) => {
  const newCat = Category(req.body);
  try {
    const setCategory = await newCat.save();
    res.status(200).json(setCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

//* find all categories
router.get("/", async (req, res) => {
  try {
    const setCategory = await Category.find();
    res.status(200).json(setCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
