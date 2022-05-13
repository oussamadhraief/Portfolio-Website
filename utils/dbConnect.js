const mongoose = require('mongoose')
require('dotenv').config()

const connection = {}

async function dbConnect(){

    if(connection.isConnected){
        return
    }

    const db = mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    connection.isConnected = db
    
}

export default dbConnect