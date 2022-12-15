import Image from "next/image"

export default function MainSection(){

    const mainPic = "mainPic_m8jjqm_hg4jcc.png"

    return (
            <div className="mx-auto sm:w-1/2 sm:mx-0 3xl:w-1/4 pt-8 2xl:w-1/3 xl:w-1/3 w-full h-auto relative hover:scale-95 transition-all hover:cursor-pointer">
                
                <Image src={mainPic} alt="Software engineer and full-stack web developer main image" quality={100} width={300} height={300} layout="responsive" priority />
            </div>
    )
}