import Image from "next/image"

export default function SocialMediaLink(props){
    return(
        <div className="shadow-[0_5px_15px_#113771] w-14 h-14 rounded-full p-3 hover:scale-125 hover:cursor-pointer group">
            <a href={props.smLink} target="_blank" rel="noreferrer">
                <Image src={props.smLogo} alt={props.altText} width={35} height={35}/>
            </a>
            <span className="absolute text-center p-2 mt-2 w-20 top-14 -left-3 z-50 origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 hidden group-hover:block">
                {props.hoverText}
            </span>
        </div>
    )
}