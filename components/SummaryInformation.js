import Socials from "./Socials.js"

export default function SummaryInformation(){

    const fbIcon = "fb_gvrvz0.png"
    const instaIcon = "insta_c3rkxa.png"
    const linkedinIcon = "linkedin_jvrtlj.png"
    const githubIcon = "github_zccvyq.png"

    return (
        <div className="bg-transparent flex mx-auto">
            <Socials link="https://www.facebook.com/oussema.dhraief/" icon={fbIcon} />
            <Socials link="https://www.instagram.com/oussema.dhraief/" icon={instaIcon} />
            <Socials link="https://www.linkedin.com/in/oussama-dhraief/" icon={linkedinIcon} />
            <Socials link="https://github.com/oussamadhraief" icon={githubIcon} />
        </div>
    )
}