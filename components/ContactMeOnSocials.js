import Image from "next/image"
import SocialMediaLink from "./SocialMediaLink"

export default function ContactMeOnSocials(){

    const fb = "f2_thoute.png"
    const insta = "i2_mbsbcg.png"
    const linked = "l2_pchcac.png"
    const git = "g2_d8lcsl.png"
    const robot = "robot_dkwhr2.gif"

    return( 
        <div id="ContactMeImage" className="w-11/12 p-5 md:p-0 md:w-4/6 h-96 md:min-h-full relative space-y-11">
                <h1 className="text-center text-xl font-bold font-mono mt-5 text-gray-900">Get in touch with me or leave me a review !</h1>
                <span className="absolute h-fit w-fit bottom-0 left-0 bg-transparent"><Image src={robot} alt="Robot Gif" width={250} height={250} className="bg-transparent" /></span>
                <div className="flex space-x-3 w-fit mx-auto content-center my-auto">
                <SocialMediaLink smLogo={fb} hoverText="Facebook" altText="Facebook Icon" smLink="https://www.facebook.com/oussema.dhraief/" />
                <SocialMediaLink smLogo={insta} hoverText="Instagram" altText="Instagram Icon" smLink="https://www.instagram.com/oussema.dhraief/" />
                <SocialMediaLink smLogo={linked} hoverText="LinkedIn" altText="LinkedIn Icon" smLink="https://www.linkedin.com/in/oussama-dhraief/" />
                <SocialMediaLink smLogo={git} hoverText="Github" altText="Github Icon" smLink="https://github.com/oussamadhraief" />
                </div>
            </div>
    )
}