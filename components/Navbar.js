import { useState } from "react";
import NavigationLinks from "./NavigationLinks"
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){


    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                
              setScrolled(true)
            } else {
                setScrolled(false)
            
            }
          }
    })
    
    return (
        <nav className={scrolled ? "flex flex-wrap justify-between z-50 fixed bg-white pt-2 shadow-xl w-screen pb-7" : "flex flex-wrap justify-between z-50 fixed bg-inherit pt-2 w-screen pb-7"}>
            <Link  href="https://www.oussama-dhraief.tech" ><a id="Logo" className={scrolled ? "whitespace-nowrap text-3xl lg:text-3xl 2xl:text-5xl font-semibold z-50 text-main mx-auto lg:ml-10 hover:cursor-pointer w-fit lg:mr-0" : "whitespace-nowrap text-3xl lg:text-3xl 2xl:text-5xl font-semibold z-50 text-slate-200 mx-auto lg:ml-10 hover:cursor-pointer w-fit lg:mr-0"}>Oussama Dhraief</a></Link>
            <NavigationLinks />
        </nav>
    )
}