const mongoose = require('mongoose')
require('dotenv').config();

const connection = {}

async function dbConnect(){

    if(connection.isConnected){
        return
    }
    console.log(process.env.MONGO_URL);
    const db = mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    connection.isConnected = db
    
}

export default dbConnect