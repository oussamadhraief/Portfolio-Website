import { useState } from "react";
import Navbar from "./Navbar"
import { useEffect } from "react";
import Link from "next/link";

export default function Header(){

    const [classes,setClasses] = useState("flex flex-wrap z-50 fixed bg-inherit pt-2 w-screen justify-between pb-7");
    const [logoClasses,setLogoClasses] = useState("whitespace-nowrap text-3xl lg:text-3xl 2xl:text-5xl font-semibold z-50 text-slate-200 mx-auto lg:ml-10 hover:cursor-pointer w-fit lg:mr-0"); 

    useEffect(() => {
        document.getElementById('Logo').addEventListener('click', () => location.reload(true))
        window.onscroll = () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
              setClasses("flex flex-wrap justify-between z-50 fixed bg-white pt-2 shadow-xl w-screen pb-7")
              setLogoClasses("whitespace-nowrap text-3xl lg:text-3xl 2xl:text-5xl font-semibold z-50 text-gray-900 mx-auto lg:ml-10 hover:cursor-pointer w-fit lg:mr-0")
            } else {
                setClasses("flex flex-wrap justify-between z-50 fixed bg-inherit pt-2 w-screen pb-7")
                setLogoClasses("whitespace-nowrap text-3xl lg:text-3xl 2xl:text-5xl font-semibold z-50 text-slate-200 mx-auto lg:ml-10 hover:cursor-pointer w-fit lg:mr-0")
            }
          }
    })
    
    return (
        <header className={classes}>
            <Link  href="#" ><a id="Logo" className={logoClasses}>Oussama Dhraief</a></Link>
            <Navbar />
        </header>
    )
}