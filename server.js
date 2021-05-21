const express= require('express');
const cors=require('cors');
const env =require('dotenv') 
const mongoose=require('mongoose')
const moviesRoutes=require('./src/Routes/movies-router')
env.config();

const connStr=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rky1z.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

const app=express();

app.use(cors());
app.on('error',(err)=>console.log(err.message))

const startServer=async()=>{

    console.log('initilizing DB');
    await mongoose.connect(connStr,{useNewUrlParser:true,useUnifiedTopology: true })
    .then(()=>{console.log('connected to mongoDB')})
    .catch((err)=>console.log(err));
    mongoose.connection.on('error',(err)=>console.log(err.message))
    const server = app.listen(process.env.PORT)
    server.on('error',(err)=>console.log(err.message))
    
}
startServer()
.then(()=>{console.log('server started on',process.env.PORT)})
.catch((err)=>console.log(err.message));


app.use('/api',moviesRoutes)