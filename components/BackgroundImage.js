import Image from "next/image"

export default function BackgroundImage() {

    const backgroundDesign = 'download_libhgv.png'

    return (
        <div className="bg-gray-900   w-screen relative">
            <Image src={backgroundDesign} alt="Background Image design" width={300} height={25} quality={100} layout="responsive" className="bg-gray-900" />
            
        </div>
    )
}