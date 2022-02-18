import Link from "next/link"
import { useEffect , useState } from "react"

export default function NavbarLink(props){
    
    const [linkClasses,setLinkClasses] = useState("whitespace-nowrap text-lg hover:cursor-pointer font-semibold text-slate-200 mx-4 hover:text-secondary");
     
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                setLinkClasses("whitespace-nowrap text-main hover:cursor-pointer text-lg font-semibold mx-4 hover:text-secondary")
            } else {
                setLinkClasses("whitespace-nowrap text-lg hover:cursor-pointer font-semibold text-slate-200 mx-4 hover:text-secondary")
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