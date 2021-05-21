const mongoose= require('mongoose');

const userS = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required:true
    },
    plan:{
        type:String,
        required:true
    },
    likedVideos:{
        type:Array,
    },
    watchedVideos:{
        type:Array,
    },
    watchList:{
        type:Array,
    },
    loggedIn:{
        type:Boolean,
        default:false
    }


})


const user= mongoose.model('user', user);

module.exports= user;