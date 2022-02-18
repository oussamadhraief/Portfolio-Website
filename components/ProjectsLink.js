import Link from "next/link"
import Image from "next/image"

export default function ProjectsLink(){

    const projectsIcon = "projects_s8su36.svg"

    return (
        <span id="projectsLink" onClick={(e) => {
            document.getElementById('ResumeContent').scroll(0,864)
            document.getElementById('projectsLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-main rounded-r-xl pr-14 h-fit"
            document.getElementById('experienceLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('skillsLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('educationLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
        }} className="whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"><Image src={projectsIcon} width={25} height={20} quality={100} className="bg-main m-0" alt="Projects Icon" />&nbsp;&nbsp;&nbsp;&nbsp;Projects</span>
    )
}