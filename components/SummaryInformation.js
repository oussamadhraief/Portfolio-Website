import Image from "next/image"

export default function SummaryInformation(){

    const fbIcon = "fb_gvrvz0.png"
    const instaIcon = "insta_c3rkxa.png"
    const linkedinIcon = "linkedin_jvrtlj.png"
    const githubIcon = "github_zccvyq.png"

    return (
        <div className="bg-transparent flex mx-auto">
            
            <a href="https://www.facebook.com/oussema.dhraief/" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={fbIcon} alt="Facebook Link" width={20} height={20} quality={100} layout="fixed" />
                </a>

                <a href="https://www.instagram.com/oussema.dhraief/" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={instaIcon} alt="Instagram Link" width={20} height={20} quality={100} layout="fixed" />
                </a>

                <a href="https://www.linkedin.com/in/oussama-dhraief/" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={linkedinIcon} alt="Linkedin Link" width={20} height={20} quality={100} layout="fixed" />
                </a>

                <a href="https://github.com/oussamadhraief" target="_blank" className="mx-1 transition-all hover:scale-125" rel="noreferrer">
                    <Image src={githubIcon} alt="Github Link" width={20} height={20} quality={100} layout="fixed" />
                </a>

        </div>
    )
}