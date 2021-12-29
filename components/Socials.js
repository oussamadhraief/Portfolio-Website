import Image from "next/image"

export default function SocialMediaLinks( props ){
    return (
        <a href={props.link} target="_blank" className="mx-1 hover:scale-125" rel="noreferrer">
            <Image src={props.icon} alt="Social Media Link" width={20} height={20} quality={100} layout="fixed" />
        </a>
    )
}