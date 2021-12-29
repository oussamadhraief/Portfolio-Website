const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        minlength: [4, 'Please enter a valid name']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true,'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    message: {
        type: String,
        required: [true, 'Please enter a message'],
        trim: true,
        minlength: [4, 'Please enter a valid message']
    }
})

module.exports = mongoose.models.Contact || mongoose.model('Contact' , ContactSchema)
