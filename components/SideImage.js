import Image from "next/image"
import { useEffect, useState } from "react"
import Monster from "./Monster"
import noSsr from "./no-ssr"

export default function SideImage(){

    const coding = "coding_tfbugk.gif"
    const [phone,setPhone] = useState()

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 639px)')
        if(mql.matches){ 
            setPhone(true)
        }else{
            setPhone(false)
        }
    },[])
    
    return ( 
        <div className="h-fit w-full lg:w-96 bg-gray-900 md:rounded-bl-lg relative sm:justify-center sm:flex sm:items-center">
            {phone ? <Image src={coding} alt="Me Coding GIF - Web development" layout="responsive" width={600} height={600} className="bg-gray-900  rounded-bl-lg" objectPosition={0} quality={100} loading="lazy" /> :
            <noSsr>
                <Monster setIsLoading={() => setIsLoading(false)} />
            </noSsr>}
        </div>
    )
}