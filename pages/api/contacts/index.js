import dbConnect from "../../../utils/dbConnect"
import Hello from "../../../models/Hello"
var validator = require('validator')

dbConnect()



export default async  (req, res) => {

    try{
        if(typeof req.body.name == 'undefined' || req.body.name.length < 4 || req.body.name == null || typeof req.body.email == 'undefined' || req.body.email.length < 4 || req.body.email == null || typeof req.body.message == 'undefined' || req.body.message.length < 4 || req.body.message == null || !validator.isEmail(req.body.email)){
            res.status(400).json({ success: false })
            return
        }
        const Hellos = await Hello.create(req.body)
        
        res.status(201).json({ success: true, data: Hellos })

    } catch (error){
 
        res.status(400).json({ success: false })


    }
}