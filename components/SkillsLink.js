import Link from "next/link"
import Image from "next/image"

export default function SkillsLink(){

    const skillsIcon = "skills_kn9zbc.svg"

    return (
        <span onClick={(e) => {
            document.getElementById('ResumeContent').scroll(0,576)
            document.getElementById('skillsLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-gray-900 rounded-r-xl pr-14 h-fit"
            document.getElementById('experienceLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('educationLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('projectsLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
        }} className="whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer" id="skillsLink"> <Image src={skillsIcon} width={25} height={20} quality={100} alt="Skills Icon" className="bg-gray-900 m-0" />&nbsp;&nbsp;&nbsp;&nbsp;Skills</span>
    )
}