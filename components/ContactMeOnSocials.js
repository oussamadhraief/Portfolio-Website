import Image from "next/image"

export default function ContactMeOnSocials(){

    const fb = "f2_thoute.png"
    const insta = "i2_mbsbcg.png"
    const linked = "l2_pchcac.png"
    const git = "g2_d8lcsl.png"
    const robot = "robot_dkwhr2.gif"

    return( 
        <div id="ContactMeImage" className="w-11/12 p-5 md:p-0 md:w-1/2 lg:w-4/6 h-[520px] md:min-h-full relative space-y-11">
                <h2 className="text-center text-xl font-bold font-mono mt-5 text-main">Get in touch with me or leave me a review !</h2>
                <span className="absolute h-fit w-fit bottom-0 z-10 left-0 bg-transparent"><Image src={robot} alt="Robot says hi gif" width={250} height={250} className="bg-transparent" /></span>
                <div className="flex space-x-3 w-fit mx-auto content-center my-auto">
                <div className="shadow-[0_5px_15px_#113771] w-14 h-14 z-50 rounded-full p-3 hover:scale-125 transition-all hover:cursor-pointer group">
                    <a href="https://www.facebook.com/oussema.dhraief/" target="_blank" rel="noreferrer">
                        <Image src={fb} alt="Facebook Icon" width={35} height={35}/>
                    </a>
                    <span className="absolute text-center p-2 mt-2 w-20 top-14 -left-3 z-50 origin-bottom-top rounded-lg shadow-md text-white bg-main text-xs font-bold transition-all duration-100 hidden group-hover:block">
                        Facebook
                    </span>
                </div>



                <div className="shadow-[0_5px_15px_#113771] w-14 h-14 z-50 rounded-full p-3 hover:scale-125 transition-all hover:cursor-pointer group">
                    <a href="https://www.instagram.com/oussema.dhraief/" target="_blank" rel="noreferrer">
                        <Image src={insta} alt="Instagram Icon" width={35} height={35}/>
                    </a>
                    <span className="absolute text-center p-2 mt-2 w-20 top-14 -left-3 z-50 origin-bottom-top rounded-lg shadow-md text-white bg-main text-xs font-bold transition-all duration-100 hidden group-hover:block">
                    Instagram
                    </span>
                </div>



                <div className="shadow-[0_5px_15px_#113771] w-14 h-14 z-50 rounded-full p-3 hover:scale-125 transition-all hover:cursor-pointer group">
                    <a href="https://www.linkedin.com/in/oussama-dhraief/" target="_blank" rel="noreferrer">
                        <Image src={linked} alt="LinkedIn Icon" width={35} height={35}/>
                    </a>
                    <span className="absolute text-center p-2 mt-2 w-20 top-14 -left-3 z-50 origin-bottom-top rounded-lg shadow-md text-white bg-main text-xs font-bold transition-all duration-100 hidden group-hover:block">
                    LinkedIn
                    </span>
                </div>



                <div className="shadow-[0_5px_15px_#113771] w-14 h-14 z-50 rounded-full p-3 hover:scale-125 transition-all hover:cursor-pointer group">
                    <a href="https://github.com/oussamadhraief" target="_blank" rel="noreferrer">
                        <Image src={git} alt="Github Icon" width={35} height={35}/>
                    </a>
                    <span className="absolute text-center p-2 mt-2 w-20 top-14 -left-3 z-50 origin-bottom-top rounded-lg shadow-md text-white bg-main text-xs font-bold transition-all duration-100 hidden group-hover:block">
                        Github
                    </span>
                </div>
                </div>
            </div>
    )
}