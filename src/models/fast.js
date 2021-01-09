const express =  require('express');
const mongoose  = require('mongoose');
const carSchema = new mongoose.Schema({
    ranking:{
        type: Number,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    country:{
        type: String,
        trim: true, 
    },
    topSpeed:{
        type: String,
        required: true
    },
})
// we are creating a new connection
const CarsRanking = new mongoose.model('CarRanking',carSchema)

module.exports = CarsRanking;