const express = require('express'); //importing express
var router = express.Router();
const universityController = require('../controllers/universityController')
require('dotenv').config();
const upload = require('../middlewares/multer');


router.route('/')
.get(universityController.getuniversity)//to get all user
.post(upload.single('Us_img'),universityController.adduniversity)//to add user



module.exports = router;
