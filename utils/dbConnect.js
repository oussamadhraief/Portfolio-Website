const mongoose = require('mongoose')
require('dotenv').config();

const connection = {}

async function dbConnect(){

    if(connection.isConnected){
        return
    }

    const { MONGO_USER,MONGO_PASSWORD,MONGO_PATH } = process.env

    
    const db = mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    connection.isConnected = db
    
}

export default dbConnect