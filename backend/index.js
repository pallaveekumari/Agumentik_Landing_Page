
const express = require('express');
const { connection } = require('./config/db');
const { userController } = require('./Routes/UserRoutes');

const port=process.env.PORT || 8080

const app = express();

app.use(express.json());

app.use('/auth',userController);

app.get('/',(req,res)=>{
    res.send('Welcme to Bangalore')
})


app.listen(port,async()=>{
    try{
        await connection;
        console.log('Connected to DB')
    }
    catch(err){
        console.log('connection failed')
    }
})