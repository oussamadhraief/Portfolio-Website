import ProjectComponent from './ProjectComponent'

export default function ProjectsSection(){
    return (
        <div id="ProjectsPart" className='h-72 mt-5 2xl:pl-5 space-y-3 pb-14 overflow-y-scroll'>
            <ProjectComponent linkToProject="https://github.com/oussamadhraief/Oussama-Dhraief-Portfolio" projectTitle="Portfolio-Website" projectDescription="My portfolio website created with Next.js (ReactJS), Tailwind CSS, Node.js and MongoDB." stars="17" forks="8" />
            <ProjectComponent linkToProject="https://github.com/oussamadhraief/ClaigsRist-Project" projectTitle="ClaigsRist-Project" projectDescription="This is an E-commerce website created using HTML, CSS, JavaScript and Firebase. " stars="13" forks="2" />
         
        </div>
    )
}