const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique:true
    },
    cartItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }
  ]
  },{ timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);