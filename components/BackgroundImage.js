import Image from "next/image"

export default function BackgroundImage() {

    const backgroundDesign = 'top_cuzoa3.png'

    return (
        <div className="w-screen relative h-16 sm:h-32">
            <Image src={backgroundDesign} alt="Background Image design" quality={100} layout="fill" />
            
        </div>
    )
}