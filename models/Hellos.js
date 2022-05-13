const mongoose = require('mongoose')

const HellosSchema = new mongoose.Schema({
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

module.exports = mongoose.models.Hellos || mongoose.model('Hellos' , HellosSchema)
