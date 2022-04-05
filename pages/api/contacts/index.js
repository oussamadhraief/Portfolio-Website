import dbConnect from "../../../utils/dbConnect"
import Message from "../../../models/Message"

dbConnect()



export default async  (req, res) => {

    try{
        
        const Messages = await Message.create(req.body)
        
        res.status(201).json({ success: true, data: Messages })

    } catch (error){
 
        res.status(400).json({ success: false })


    }
}