
const express = require("express");
const educator = require("../controllers/educatorController");
const router = express.Router();
const{requireSignin, universityMiddleware}=require('../middlewares/usermiddleware')

router.post("/",requireSignin,universityMiddleware ,educator.addeducator);
router.get("/", educator.geteducator);
router.get("/add", educator.university_educator_course);


module.exports = router;