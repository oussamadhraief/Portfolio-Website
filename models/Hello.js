const mongoose = require('mongoose')

const HelloSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
})

module.exports = mongoose.models.Hello || mongoose.model('Hello' , HelloSchema)
