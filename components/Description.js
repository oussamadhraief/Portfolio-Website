import ButtonContainerAboutMe from './ButtonContainerAboutMe'

export default function Description(){
    return ( 
        <div className="ml-0 lg:ml-5 w-full lg:w-2/3 2xl:w-8/12 space-y-0 3xl:w-11/12">
            <p className="text-justify 2xl:font-medium mt-3 font-sans w-full h-fit sm:w-full px-2 sm:px-5 lg:pl-0 lg:pr-3 mb-5 lg:mb-3 xl:mb-8 2xl:mb-16 3xl:mb-10">
            My name is Oussama Dhraief and I am a 22 year-old tunisian Computer Science student. 
            I am very responsible, patient, persistent, hard-working and most importantly passionate with web development 
            and constantly trying to expand my knowledge and experiences in this wide field.
            My goal for the next few years is to invest more time everyday for my personal development as well as to take more adventures 
            and to find more opportunities in order to become a high level software engineer.
            However, I like to hang out with friends and join university clubs to develop my social skills.
            </p>
            <p className="font-semibold text-secondary px-5 lg:px-0 font-sans w-3/6">
                Hobbies and interests:
            </p>
            <p className="font-normal px-5 lg:px-0 2xl:font-medium"><span className="font-extrabold whitespace-nowrap text-xl lg:text-2xl text-secondary my-0 py-0 w-full">.</span> Sports</p>
            <p className="font-normal px-5 lg:px-0 2xl:font-medium"><span className="font-extrabold whitespace-nowrap text-xl lg:text-2xl text-secondary my-0 py-0 w-full">.</span> Video games</p>
            <p className="font-normal px-5 lg:px-0 2xl:font-medium"><span className="font-extrabold whitespace-nowrap text-xl lg:text-2xl text-secondary my-0 py-0 w-full">.</span> Camping</p>

            <ButtonContainerAboutMe />
        </div>
    )
}