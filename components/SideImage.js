import Image from "next/image"

export default function SideImage(){

    const coding = "coding_tfbugk.gif"
    
    return ( 
        <div className="w-full h-fit lg:w-2/3 2xl:w-8/12 bg-gray-900">
            <Image src={coding} alt="Me Coding GIF - Web development" layout="responsive" width={600} height={600} className="bg-gray-900" objectPosition={0} quality={100} loading="lazy" />
        </div>
    )
}