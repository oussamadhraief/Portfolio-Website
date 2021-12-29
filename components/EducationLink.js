import Link from "next/link"
import Image from "next/image"

export default function EducationLink(){

    const educationIcon = "education_pmgojw.svg"

    return (
        <span onClick={(e) => {
            document.getElementById('ResumeContent').scroll(0,0)
            document.getElementById('educationLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-gray-900 rounded-r-xl pr-14 h-fit"
            document.getElementById('experienceLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('skillsLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('projectsLink').className = "whitespace-nowrap text-gray-900 pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
    }} className="transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-gray-900 rounded-r-xl pr-14 h-fit" id="educationLink"><Image className="bg-gray-900 m-0" src={educationIcon} width={25} height={25} quality={100} alt="Student Icon"/>&nbsp;&nbsp;&nbsp;&nbsp;Education</span>
    )
}