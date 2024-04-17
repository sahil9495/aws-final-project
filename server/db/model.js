const express = require ("express");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require:true,
       
    },
    dateOfBirth: {
        type: Date,
        require:true,
        
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        require:true,
    },
    bloodType: {
        type: String,
        require:true,
    },
    address: {
        type: String,
        require:true,
        
    },
    phoneNumber: {
        type: String,
        require:true,
       
    },
    emailAddress: {
        type: String,
        require:true,
        
    },
    aadharnum: {
        type: String,
        require:true
        
    },
    isApproved: {
        type: Boolean,
        default: false
      }
});



const User = new mongoose.model("User",userSchema);

module.exports = User;