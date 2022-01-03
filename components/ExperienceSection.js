import Skills from "./Skills"

export default function ExperienceSection(){ 
    return (
        <div id="ExperiencePart" className='h-72 pl-3 overflow-y-scroll w-fit 2xl:w-94 pt-2 2xl:pt-5'>
            <h1 className="text-gray-900 font-semibold 2xl:font-bold">End of Studies Internship</h1>
            <p className="font-thin sm:font-normal">
            Developing and maintaining an E-commerce web application at Medical and surgical suppliers (Full-Stack Developer).
            </p>
            <h1 className="text-gray-900 font-medium 2xl:font-semibold">Technologies used:</h1>
            <Skills skillText="Next.js (ReactJS)" />
            <Skills skillText="CSS3" />
            <Skills skillText="Tailwind CSS" />
            <Skills skillText="Express.js (Node.js)" />
            <Skills skillText="MongoDB" />
        </div>
    )
}