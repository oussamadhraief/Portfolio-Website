import Link from "next/link"

export default function HireMeButton(props){
    return(
        <Link href="#ContactMe"><a className={props.styling}>Hire Me</a></Link>
    )
}