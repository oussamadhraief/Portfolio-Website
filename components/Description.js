import Skills from './Skills'
import ButtonContainerAboutMe from './ButtonContainerAboutMe'

export default function Description(){
    return ( 
        <div className="ml-0 lg:ml-5 w-full lg:w-2/3 2xl:w-8/12 space-y-0 3xl:w-11/12">
            <p className="text-justify 2xl:font-medium mt-3 font-sans w-full px-5 lg:pl-0 lg:pr-3 mb-5 lg:mb-3 xl:mb-8 2xl:mb-16 3xl:mb-10">
            My name is Oussama Dhraief and I am a 21 year-old tunisian Computer Science student. 
            I am very responsible, patient, persistant, hard-working and most importantly passionate with web development 
            and constantly trying to expand my knowledge and experiences in this wide field.
            My goal for the next few years is to invest more time everyday for my personal development as well as to take more adventures 
            and to find more opportunities in order to become a high level software engineer.
            However, I like to hang out with friends and join university clubs to develop my social skills.
            </p>
            <p className="font-semibold text-yellow-500 px-5 lg:px-0 font-sans w-3/6">
                Hobbies and interests:
            </p>
            <Skills skillText="Sports" />
            <Skills skillText="Video games" />
            <Skills skillText="Camping" />
            <ButtonContainerAboutMe />
        </div>
    )
}