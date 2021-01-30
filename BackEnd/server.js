const load = require("dotenv").config();
const stripe = require('stripe')('pk_test_51IFLxmKQ6CaEH9YPbqPok13cH6BlHxxxgqMrOjIibQaX0g3Rz7UAqeALI27hveLIEVAVmeBff9xiQVP3v6enSCqD00DlyVv5ox');
require("dotenv").config();
if (load.error) throw load.error;
require('./models/db');                       //import MONGODB connction files
const express = require('express');                      // import  express
const bodyparser = require('body-parser');               // import  body-parser           
const cors = require('cors')
const cookieParser=require('cookie-parser')  
const config  = require('./Paytm/config')
const checksum_lib  = require('./Paytm/checksum')

const user = require('./routes/userRoute');    // import  userController                        
const course = require('./routes/courseRoute')
const university = require('./routes/universityRoute');    // import  userController    
const category = require('./routes/categoryRoute')
const userAuth = require('./routes/userAuthRoute')
const schedule = require('./routes/scheduleRoutes')
const cart = require('./routes/cartRoute')
const educator = require('./routes/educatorRoute')
const Pay = require('./routes/PayRoute')

const app = express()                                    //Asigning express    
     
app.use(cors());

app.use(bodyparser.urlencoded({
    extended: true                          //Asigning bodyparser
}));

app.use(bodyparser.json());                   //Asigning json of bodyparser

app.use(cookieParser(process.env.COOKIE_SECRET));

app.get('/', (req, res) => {
  res.send('Hello World');                        //simple route for hello World
});
app.get('hi',(req,res)=>{
  res.send("hii")
})

app.use('/user',user);        //  setting router 
app.use('/course',course);
app.use('/university',university);        //  setting router 
app.use('/user/auth',userAuth); 
app.use('/category',category); 
app.use('/schedule',schedule); 
app.use('/cart',cart); 
app.use('/educator',educator); 
app.use('/Pay',Pay); 

app.post("/callback", (req, res) => {
  
  res.redirect("http://localhost:3001/")
  res.json("done")
});

console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;
app.listen(PORT,console.log(`Port is running on http://localhost:${PORT}`));