const express = require("express");
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/category");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
require('dotenv').config();
const upload = require('../middlewares/multer');

router.post("/create",upload.single("categoryImage"),addCategory);
router.get("/getcategory", getCategories);
router.put("/update",upload.array("categoryImage"),updateCategories);
router.delete("/delete", deleteCategories);

module.exports = router;