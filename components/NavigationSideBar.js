import EducationLink from './EducationLink'
import ExperienceLink from './ExperienceLink'
import SkillsLink from './SkillsLink'
import ProjectsLink from './ProjectsLink'

export default function NavigationSideBar(){
    return (
        <div className='grid w-48 xl:w-fit pr-24 sm:pr-20 md:border-r-2'>
            <div className='w-8 h-72 absolute bg-gray-900'></div>
            <EducationLink />
            <ExperienceLink />
            <SkillsLink />
            <ProjectsLink />
        </div>
    )
}