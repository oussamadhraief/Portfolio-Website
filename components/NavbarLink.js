import Link from "next/link"
import { useEffect , useState } from "react"

export default function NavbarLink(props){
    
    const [linkClasses,setLinkClasses] = useState("whitespace-nowrap text-lg hover:cursor-pointer font-semibold text-slate-200 mx-4 hover:text-yellow-500");
     
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                setLinkClasses("whitespace-nowrap text-gray-900 hover:cursor-pointer text-lg font-semibold mx-4 hover:text-yellow-500")
            } else {
                setLinkClasses("whitespace-nowrap text-lg hover:cursor-pointer font-semibold text-slate-200 mx-4 hover:text-yellow-500")
            }
          }
    )})
    
    if(props.onclick != 'takeMeToASection')
    return (
            <Link  href={props.destinationSection} >
                <a className={linkClasses} onClick={
                (e) => {document.getElementById(props.onclick).click()}
            }>{props.linkName}</a>
            </Link>
        )

    return (
        <Link href={props.destinationSection} >
            <a className={linkClasses}>{props.linkName}</a>
        </Link>
    )
}