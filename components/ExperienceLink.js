import Link from "next/link"
import Image from "next/image"

export default function ExperienceLink(){

    const experienceIcon = "experience_u0hbbo.svg"

    return (
       <span id="experienceLink" onClick={(e) => {
           document.getElementById('ResumeContent').scroll(0,288)
            document.getElementById('experienceLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-gray-900 rounded-r-xl pr-14 h-fit"
            document.getElementById('educationLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('skillsLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('projectsLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
        }} className="whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"><Image src={experienceIcon} width={25} height={25} quality={100} className="bg-gray-900" alt="Experience Icon"/>&nbsp;&nbsp;&nbsp;&nbsp;Experience</span>

    )
}

// <Link href="#ExperiencePart" className="scroll-smooth"></Link>