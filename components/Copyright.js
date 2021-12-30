import Image from 'next/image'
import FooterContainer from './FooterContainer'

export default function Copyright(){

    const bgImage = "download2_bfdqxg.svg"
    
    return(
        <footer className="w-full bg-gray-900 mt-10 h-fit mb-8">
            <div className="w-screen relative bg-white">
            <Image src={bgImage} alt="Wavy background white image" width={300} height={20} quality={100} layout='responsive'/>
            </div>
            <FooterContainer />
        </footer>
    )
}