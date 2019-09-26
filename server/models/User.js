const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    dob: Date,
    city: String,
    country: String,
    password: String,
    phone:String,
    education: [{
        degreeTitle: String,
        institutionName: String,
        city: String,
        yearStart: Number,
        yearEnd: Number,
        result:Number
    }],
    experience: [{
        jobTitle: String,
        institutionName: String,
        city: String,
        yearStart: Number,
        yearEnd: Number,
    }],
    skills:[String]
})

const User = mongoose.model("user", userSchema)
module.exports = User 