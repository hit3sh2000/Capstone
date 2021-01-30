const mongoose = require('mongoose');
const Course = mongoose.model('Course');
require('dotenv').config();
const slugify = require("slugify");
const shortid = require("shortid");
const cloudinary = require('cloudinary');
require('../middlewares/cloudinary');
module.exports = {
    addCourse: async(req,res)=>{
        try {
            const path ="course/avatar/" + req.file.filename;
            const avatar = await cloudinary.v2.uploader.upload(req.file.path,
            { public_id: path });

            const {
                C_name,C_desc,C_ratings,C_reviews,C_duration,C_price,category 
            } = req.body;
            

            const course = new Course(); 
            course.C_name = C_name
            course.C_slug = slugify(C_name)
            course.C_desc = C_desc
            course.C_img = avatar.url
            course.C_ratings = C_ratings
            course.C_reviews = C_reviews
            course.C_duration = C_duration
            course.C_price = C_price
            course.category = category
           
            await course.save((err, doc) => {
                if (!err)
                    res.json(course)
                else {
                     console.log(err);
                }
            });      
        } catch (err) {
            res.json(err)
            console.log(err);
        }
    }, 
    getCourse: async(req, res) => {
        try{
            const course = await Course.find();
            res.json(course);
        }catch(err){
        res.send(err)
        }
    },
    fetchUniversityCourse: async (req, res) => {
        try {
            const id = req.params.id;
            const course = await Course.findById(id).populate("Universities");
            // console.log(course.Universities);
            res.json(course.Universities);
        } catch (err) {
            res.send(err)
        }
    }
}