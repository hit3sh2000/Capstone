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
const{requireSignin}=require('../middlewares/usermiddleware')

router.post("/create", requireSignin,upload.single("categoryImage"),addCategory);
router.get("/getcategory",requireSignin, getCategories);
router.put("/update",requireSignin , upload.array("categoryImage"),updateCategories);
router.delete("/delete",requireSignin, deleteCategories);

module.exports = router;