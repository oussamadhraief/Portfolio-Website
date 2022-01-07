import Socials from "./Socials"

export default function FooterContainer(){

    const fbIcon = "fb_gvrvz0.png"
    const instaIcon = "insta_c3rkxa.png"
    const linkedinIcon = "linkedin_jvrtlj.png"
    const githubIcon = "github_zccvyq.png"

    return (
        <div className="grid sm:flex sm:flex-wrap bg-inherit px-14 pt-24 pb-5 space-y-3 sm:space-y-0 sm:justify-between">
            <div className="flex flex-nowrap mx-auto sm:mx-0">
                <Socials link="https://www.facebook.com/oussema.dhraief/" icon={fbIcon} />
                <Socials link="https://www.instagram.com/oussema.dhraief/" icon={instaIcon} />
                <Socials link="https://www.linkedin.com/in/oussama-dhraief/" icon={linkedinIcon} />
                <Socials link="https://github.com/oussamadhraief" icon={githubIcon} />
            </div>
            <p className="font-thin text-white mx-auto whitespace-nowrap sm:mx-0">Oussama Dhraief © 2022, Tunisia.</p>
            <a href="#" className="font-bold text-white w-fit mx-auto sm:mx-0 border-2 border-dotted rounded-full px-3 py-2 hover:animate-[spin_1s_linear]">▲</a>
        </div>
    )
}