import Link from "next/link"

export default function ResumeDownloadButton(props){
    return(
        <Link href="/Oussema-Dhraief-Resume.pdf"><a target="_blank" className={props.styling}>Get Resume</a></Link>
    )
}