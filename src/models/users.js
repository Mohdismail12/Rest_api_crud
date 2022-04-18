const mongoose = require('mongoose')
// const express = require("express");
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    lang: {
        type: String,
        required: true,
        trim: true
    },
    member_since: {
        type: Number,
        required: true,
        unique: true
    },
})
const Ranking = new mongoose.model("Ranking",userSchema )

module.exports=Ranking;