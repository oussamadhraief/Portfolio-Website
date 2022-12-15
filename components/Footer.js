import Image from 'next/image'

export default function Footer(){

    const bgImage = "bottom_o1wq8p.png"
    const fbIcon = "fb_gvrvz0.png"
    const instaIcon = "insta_c3rkxa.png"
    const linkedinIcon = "linkedin_jvrtlj.png"
    const githubIcon = "github_zccvyq.png"
    
    return(
        <footer className="w-full bg-main mt-10 h-fit mb-8">
            <div className="w-screen relative h-16 sm:h-32 bg-white">
            <Image src={bgImage} alt="Wave css background image" quality={100} layout='fill'/>
            </div>
            <div className="grid sm:flex sm:flex-wrap bg-inherit px-14 pt-24 pb-5 space-y-3 sm:space-y-0 sm:justify-between">
            <div className="flex flex-nowrap mx-auto sm:mx-0">

                <a href="https://www.facebook.com/oussema.dhraief/" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={fbIcon} alt="Facebook link" width={20} height={20} quality={100} layout="fixed" />
                </a>

                <a href="https://www.instagram.com/oussema.dhraief/" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={instaIcon} alt="instagram Link" width={20} height={20} quality={100} layout="fixed" />
                </a>

                <a href="https://www.linkedin.com/in/oussama-dhraief/" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={linkedinIcon} alt="linkedin Link" width={20} height={20} quality={100} layout="fixed" />
                </a>

                <a href="https://github.com/oussamadhraief" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={githubIcon} alt="github Link" width={20} height={20} quality={100} layout="fixed" />
                </a>
                
            </div>
            <p className="font-thin text-white mx-auto whitespace-nowrap sm:mx-0">Oussama Dhraief © 2022, Tunisia.</p>
            <a href="#" className="font-bold text-white w-fit mx-auto sm:mx-0 border-2 border-dotted rounded-full px-3 py-2 hover:animate-[spin_1s_linear]">▲</a>
        </div>
        </footer>
    )
}