const mongoose = require('mongoose');
const Schedule = mongoose.model('Schedule');

module.exports = {
    addSchedule: async(req,res)=>{
        try {
            const {
                Us_id,C_id,S_topic,S_date,S_time,S_link
            } = req.body;

            const schedule = new Schedule(); 
            schedule.Us_id = Us_id
            schedule.C_id = C_id
            schedule.S_topic = S_topic
            schedule.S_date = S_date
            schedule.S_time = S_time
            schedule.S_link = S_link
            await schedule.save((err, doc) => {
                if (!err)
                    res.json(schedule)
                else {
                     console.log(err);
                }
            });      
        } catch (err) {
            res.send(err)
            console.log(err);
        }
    }, 
    getSchedule: async(req, res) => {
        try{
            const schedule = await Schedule.find();
            res.send(schedule);
            
        }catch(err){
        res.send(err)
        }
    }  
}