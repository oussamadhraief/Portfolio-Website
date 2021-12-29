import dbConnect from "../../../utils/dbConnect"
import Contact from "../../../models/Contact"

dbConnect()



const pushData = async (req, res) => {

    try{
        
        const contact = await Contact.create(req.body)
        
        res.status(201).json({ success: true, data: contact })

    } catch (error){
 
        res.status(400).json({ success: false })


    }
}

export default pushData