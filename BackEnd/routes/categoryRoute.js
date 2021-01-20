// const shortid = require("shortid");
// const path = require("path");                          commented because it not used 
// require('dotenv').config();
// const upload = require('../middlewares/multer');

const express = require("express");
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/category");
const router = express.Router();
const{requireSignin ,universityMiddleware}=require('../middlewares/usermiddleware')

router.post("/create",requireSignin,universityMiddleware,addCategory);
router.get("/getcategory", getCategories);
router.put("/update" ,requireSignin,universityMiddleware,updateCategories);
router.delete("/delete", deleteCategories);

module.exports = router;