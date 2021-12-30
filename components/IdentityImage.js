import Image from "next/image"

export default function MainSection(){

    const mainPic = "mainPic_m8jjqm.png"

    return (
            <div className="mx-auto sm:w-1/2 sm:mx-0 3xl:w-1/4 pt-6 2xl:w-1/3 xl:w-1/3 w-full h-auto relative">
                
                <Image src={mainPic} alt="that's me picture" quality={100} width={300} height={300} layout="responsive" priority />
            </div>
    )
}

{/* <div className="mx-auto sm:mx-0 w-full h-[330px] xs:h-[500px] sm:w-1/2 sm:h-[380px] md:w-[46%] md:h-[400px] 2xl:w-1/4 3xl:w-1/4 xl:w-1/3 lg:w-2/6 2xl:h-[450px] lg:h-[400px] xl:h-[450px] 3xl:h-[500px] relative">
                
                <Image src={mainPic} alt="that's me picture" quality={100} layout="fill" priority />
            </div> */}