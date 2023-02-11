const express =require ('express');
const  mongoose = require ('mongoose');
const path = require('path');

const app =express(); 

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://mohamed:0100Eng&&r@mohamed.u8flfun.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser:true , useUnifiedTopology: true}, (err) => {
    if (err){
     console.log(err)
     return
    }else{
        console.log('connecting to DB')
    }
});

//user routes
const user_routes = require("./routers/userrouter");
app.use('/news',user_routes)

app.listen(process.env.PORT  || 3000,() => console.log('server listen on part 3000'));

