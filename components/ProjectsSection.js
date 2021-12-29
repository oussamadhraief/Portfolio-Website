import ProjectComponent from './ProjectComponent'

export default function ProjectsSection(){
    return (
        <div id="ProjectsPart" className='h-72 mt-5 space-y-3'>
            <ProjectComponent linkToProject="https://github.com/oussamadhraief/Portfolio" projectTitle="Portfolio-Website" projectDescription="This is my portfolio website." stars="17" forks="8" />
            <ProjectComponent linkToProject="https://github.com/oussamadhraief/ClaigsRist-Project" projectTitle="ClaigsRist-Project" projectDescription="This is a personal project - E-commerce website." stars="13" forks="2" />
        </div>
    )
}