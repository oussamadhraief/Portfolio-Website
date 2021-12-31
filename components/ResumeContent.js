import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'

export default function ResumeContent(){
    return (
        <div id='ResumeContent' className='overflow-y-hidden mt-4 md:mt-0 mx-auto sm:mx-0 px-1 sm:px-5 w-full sm:w-fit h-72'>
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
        </div>
    )
}