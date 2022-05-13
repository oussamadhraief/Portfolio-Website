const mongoose = require('mongoose')
require('dotenv').config()

const connection = {}

async function dbConnect(){

    if(connection.isConnected){
        return
    }

    const db_url = "mongodb+srv://Oussema17:pWgTwYXshr2sFvkk@cluster0.gvckm.mongodb.net/Cluster0?retryWrites=true&w=majority"

    const db = mongoose.connect(db_url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    connection.isConnected = db.connections[0].readyState
    
}

export default dbConnect