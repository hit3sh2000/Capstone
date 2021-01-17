const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    C_id:{
        type:String
    },
    C_name:{
        type:String,
        required: true
    },
    C_slug: {
        type: String,
        required: true,
        unique: true,
    },
    C_desc:{
        type:String,
        required: true
    },
    C_img:{
        type:String
    },
    C_rating:[{
        type:String
    }],
    C_reviews:[{
        type:String
    }],
    C_duration:{
        type:String
    },
    C_price:{
        type:String,
        required:true
    }
    // ,
    // Users:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
    // Universities:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: 'University'
    // }
})


mongoose.model('Course',courseSchema);
