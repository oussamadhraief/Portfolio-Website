import Image from "next/image"


export default function NavigationSideBar(){

    const experienceIcon = "experience_u0hbbo.svg"
    const educationIcon = "education_pmgojw.svg"
    const projectsIcon = "projects_s8su36.svg"
    const skillsIcon = "skills_kn9zbc.svg"


    return (
        <div className='grid w-48 xl:w-fit pr-24 sm:pr-20 md:border-r-2'>
            <div className='w-8 h-72 absolute bg-main'></div>

            <span onClick={(e) => {
            document.getElementById('ResumeContent').scroll(0,0)
            document.getElementById('educationLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-main rounded-r-xl pr-14 h-fit"
            document.getElementById('experienceLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('skillsLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('projectsLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            }} 
            className="transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-main rounded-r-xl pr-14 h-fit" id="educationLink">
            <Image className="bg-main m-0" src={educationIcon} width={25} height={25} quality={100} alt="Github student Icon"/>
            &nbsp;&nbsp;&nbsp;&nbsp;Education
            </span>

            <span id="experienceLink" onClick={(e) => {
            document.getElementById('ResumeContent').scroll(0,288)
            document.getElementById('experienceLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-main rounded-r-xl pr-14 h-fit"
            document.getElementById('educationLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('skillsLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('projectsLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            }} className="whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"><Image src={experienceIcon} width={25} height={25} quality={100} className="bg-main" alt="Professional Experience Icon"/>&nbsp;&nbsp;&nbsp;&nbsp;Experience</span>
            
            <span onClick={(e) => {
            document.getElementById('ResumeContent').scroll(0,576)
            document.getElementById('skillsLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-main rounded-r-xl pr-14 h-fit"
            document.getElementById('experienceLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('educationLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('projectsLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
        }} className="whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer" id="skillsLink"> <Image src={skillsIcon} width={25} height={20} quality={100} alt="Web development and coding skills Icon" className="bg-main m-0" />&nbsp;&nbsp;&nbsp;&nbsp;Skills</span>

            <span id="projectsLink" onClick={(e) => {
            document.getElementById('ResumeContent').scroll(0,864)
            document.getElementById('projectsLink').className = "transition delay-75 whitespace-nowrap text-white my-5 ml-1 text-xl font-semibold hover:cursor-pointer bg-main rounded-r-xl pr-14 h-fit"
            document.getElementById('experienceLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('skillsLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
            document.getElementById('educationLink').className = "whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"
        }} className="whitespace-nowrap text-main pr-14 py-5 ml-1 text-xl font-semibold hover:cursor-pointer"><Image src={projectsIcon} width={25} height={20} quality={100} className="bg-main m-0" alt="Projects Icon" />&nbsp;&nbsp;&nbsp;&nbsp;Projects</span>
        </div>
    )
}