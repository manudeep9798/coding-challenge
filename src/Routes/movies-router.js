const express =require('express');

const router=express.Router();
const routeController=require('../controllers/movies-route-controller')

//test api
router.get('/test',(req,res)=>{
    res.json({
        msg:"working"
    })
})

//POST API
//register user
router.post('/POST/register',routeController.register)

module.exports=router