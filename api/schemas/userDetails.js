const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({

    userhandle: {
        type: String,
        max: 40,
        required: true,
        unique: true
    },
    bio:{
        type:String,
        default:null
    },

    email: {
        type: String,
        max: 40,
        required: true,
        unique: true
    },

    password: {
        type: String,
        max: 255,
        required: true,
    },
    location:{
        type: String,
        max:50,
        required:true,
        default: "Delhi"
    },

    name: {
        type: String,
        max: 40,
        required: true
    },

    joined: {
        type:Date,
        default: Date.now()
    },

    dob: {
        type: Date
    },

    followerCount:{
        type: Number,
        default: 0
    },

    followingCount:{
        type: Number,
        default: 0
    },

    tweetCount:{
        type: Number,
        default: 0
    },

    profileImageURL: {
        type: String,
        default: null
    }

});
 
const User= mongoose.model('User', userSchema);
module.exports = User;