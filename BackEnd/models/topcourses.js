const mongoose = require("mongoose");
const topcoursesSchema = new mongoose.Schema(
  {
    Topcourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }
  ]
  },{ timestamps: true });

module.exports = mongoose.model("Topcourses", topcoursesSchema);