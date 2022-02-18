import Image from 'next/image'
import FooterContainer from './FooterContainer'

export default function Copyright(){

    const bgImage = "bottom_o1wq8p.png"
    
    return(
        <footer className="w-full bg-main mt-10 h-fit mb-8">
            <div className="w-screen relative h-16 sm:h-32 bg-white">
            <Image src={bgImage} alt="Wavy background white image" quality={100} layout='fill'/>
            </div>
            <FooterContainer />
        </footer>
    )
}