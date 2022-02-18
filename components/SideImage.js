import Image from "next/image"
import { useEffect, useState,useContext } from "react"
import Monster from "./Monster"
import NoSsr from "./no-ssr"
import { LoadingContext } from "../utils/LoadingContext";


export default function SideImage(){

    const coding = "coding_tfbugk.gif"
    const [phone,setPhone] = useState()
    const {loading, setLoading} = useContext(LoadingContext)

    useEffect(() => {
        let mql = window.matchMedia('(max-width: 639px)')
            if(mql.matches){ 
                setPhone(true)
                setLoading(false)
            }else{
                setPhone(false)
            }
    })


    useEffect(() => {
        window.addEventListener('resize',() => {
            let mql = window.matchMedia('(max-width: 639px)')
            if(mql.matches){ 
                setPhone(true)
                setLoading(false)
            }else{
                setPhone(false)
            }
        })
    })
    
    return ( 
        <div className="h-fit w-full lg:w-96 bg-gray-900 md:rounded-bl-lg relative sm:grid">
            {phone ? null : <p className="text-white mx-auto mt-1">Hey, play with me</p>}
            {phone ? <Image src={coding} alt="Me Coding GIF - Web development" layout="responsive" width={600} height={600} className="bg-gray-900  rounded-bl-lg" objectPosition={0} quality={100} loading="lazy" /> :
            <NoSsr>
                <Monster />
            </NoSsr>}
        </div>
    )
}