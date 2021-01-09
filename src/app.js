const express  = require('express');
require('./db/conn')
const router = require('./routers/car');


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()) //this is used to accept the json data from postman

app.use(router) //to use router 


// port listening 
app.listen(port,()=>{
    console.log(`app is run at port ${port}`)
})

