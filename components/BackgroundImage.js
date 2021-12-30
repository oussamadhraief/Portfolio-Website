import Image from "next/image"

export default function BackgroundImage() {

    const backgroundDesign = 'download_gxnlkj.svg'

    return (
        <div className="w-screen relative">
            <Image src={backgroundDesign} alt="Background Image design" width={300} height={50} quality={100} layout="responsive" />
            
        </div>
    )
}