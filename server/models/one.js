const mongoose = require('mongoose')
const { type } = require('os')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    rollno:
    {
        type: Number,
        required: true
    },
    tech: 
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    porf: 
   {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Student',studentSchema)
