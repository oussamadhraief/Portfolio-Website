import { useEffect, useState } from "react"
import 'animate.css'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

export default function ContactMeForm(){

const [formInputs,setFormInputs] = useState({name: "", email: "", message: ""})
const [submitted,setSubmitted] = useState(false)
const [dataError,setDataError] = useState(false)
const [loading,setLoading] = useState(false)

const handleChange = (e) => {
    setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.value
    }) 
}

const handleSubmit = async () => {
    try {
        setLoading(true)
        const res = await fetch('api/contacts', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formInputs)
        }).then((res) =>{
            if(res.status == 201){
                setLoading(false)
                setFormInputs({name: "", email: "", message: ""})
                setSubmitted(true)
            }else{
                setLoading(false)
                setDataError(false)
                setDataError(true)
            }
        }
        )
        
        
    } catch (error) {
        console.error(error)
    }
}


    if(submitted) 
    return (
        <div className="grid space-y-5 w-full md:w-5/6 lg:w-4/6 py-20 md:p-5 h-full rounded-xl text-medium font-bold text-center text-main animate-[bounce_1s] content-center">
            Sent ✔️
            <br></br>
            Thank you for you message !
        </div>
    )
    return(
        <form action="submit" onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }} className="grid w-full md:w-3/6 p-5 h-fit rounded-xl relative overflow-y-hidden">
            <p className=" text-xl my-3 font-bold text-main"><span className="text-zinc-400 text-medium font-thin">*</span> Full name: <span className="text-sm font-thin text-zinc-400">(4 characters at least)</span></p>
            <input type="text" name="name" value={formInputs.name} minLength={4} onChange={(e) => handleChange(e)} className=" border-2 rounded-lg border-main h-12" required />
        
            <p className="text-xl my-3 font-bold text-main"><span className="text-zinc-400 text-medium font-thin">*</span> E-mail: <span className="text-sm font-thin text-zinc-400"></span></p>
            <input type="email" name="email" value={formInputs.email} onChange={(e) => handleChange(e)}  className="  border-2 rounded-lg border-main h-12" required />
        
            <p className="text-xl my-3 font-bold text-main"><span className="text-zinc-400 text-medium font-thin">*</span> Message: <span className="text-sm font-thin text-zinc-400">(4 characters at least)</span></p>
            <textarea name="message" value={formInputs.message} onChange={(e) => handleChange(e)} cols={50} rows={4} className=" resize-none border-2 rounded-lg border-main h-32"  required />

            {dataError ? <p className="text-sm font-thin animate__animated animate__flash text-red-900">Your message is too short. </p> : null}
        
            <input type="submit" name="submit" className="bg-main w-fit mt-3 px-3 py-2 md:px-6 md:py-3 rounded-2xl font-bold text-xl font-mono text-white hover:bg-secondary hover:scale-110 hover:cursor-pointer mx-auto my-10" />
           {loading ? <div id='loading' className="flex w-full h-full md:h-[93%] justify-center items-center text-main rounded-xl text-center text-lg font-extrabold absolute overflow-hidden">
                PROCESSING<Typewriter
                            words={['...']}
                            loop={0}
                            typeSpeed={200}
                            deleteSpeed={50}
                            delaySpeed={500}
                            />
            </div> : null}
    </form>
    )


}