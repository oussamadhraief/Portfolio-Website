import Image from "next/image"

export default function WebSkill(props){
    return (
        <div className="w-14 h-14 z-10 mb-7 rounded-full bg-white relative shadow-[0_5px_15px_#113771] px-2 py-2 hover:scale-125 hover:cursor-pointer group">
            <Image src={props.srcPath} alt={props.altText} width={40} height={40}/>
            <span className="absolute text-center 2xl:p-2 mt-2 w-20 top-14 -left-3 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 hidden group-hover:block">
                {props.hoverText}
            </span>
        </div>
    )
}