const mongoose = require("mongoose");
const scheduleSchema = new mongoose.Schema({
    Us_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'University'
      },
    C_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      },
    S_topic: {
        type: String
      },
    S_date: {
        type: String
      },
    S_time: {
        type: String
      },
    S_link: {
        type: String
      }
});

mongoose.model("Schedule",scheduleSchema);