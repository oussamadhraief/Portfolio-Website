import EducationElement from './EducationElement'

export default function EducationSection(){
    return (
        <div id="EducationPart" className='h-72 space-y-8 sm:space-y-24 py-5 sm:py-10'>  
            <EducationElement year="2019-2021" institute="Higher Institute of Applied Science and Technology of Sousse" degree="Bachelor's degree of Computer Science" />
            <EducationElement year="2015-2019" institute="Hammem Sousse II High School" degree="High school diploma"/>
        </div>
    )
}