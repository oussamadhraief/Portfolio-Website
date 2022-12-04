import Image from 'next/image'

export default function ProjectsSection(){

    const github = "gitthing_sxmnto.png"
    const stars = "star_r8dmt2.png"
    const projectIcon = "projectIcon_a5zrgp.png"

    return (
        <div id="ProjectsPart" className='h-72 overflow-x-hidden mt-5 md:mt-0 pt-0 md:pt-3 lg:pt-2 md:pl-5 2xl:pl-5 space-y-3 pb-14 overflow-y-scroll'>
            <div className='border-2 border-zinc-300  h-40 w-fit sm:w-96 py-2 pl-2 pr-5 sm:pr-20 rounded-lg hover:md:scale-[1.01] hover:cursor-pointer' onClick={() => {
            window.open("https://github.com/oussamadhraief/Oussama-Dhraief-Portfolio", '_blank');
        }}>
            <div className='flex'>
            <div className='mt-1 mr-1'><Image src={projectIcon} alt="Github Repository" width={20}  height={18} /></div>
                <span className='ml-1 text-blue-500 hover:underline hover:cursor-pointer whitespace-nowrap'>Portfolio-Website</span>
                <span className='border-2 rounded-full px-2 border-zinc-300 text-zinc-700 ml-3'>Public</span>
            </div>
            <p className='text-zinc-500 text-sm font-thin 2xl:font-normal h-20 overflow-hidden'>My portfolio website created using Next.js (ReactJS), Three.js, Tailwind CSS, Node.js and MongoDB.</p>
            <div className='flex max-h-5 mb-6 sm:mb-8'>
            <span className="bg-yellow-200 my-0 w-3 h-3 mt-5 sm:mt-5 rounded-full"></span><span className='mr-5 ml-1 mt-3.5'>JavaScript</span>
                <div className='mt-4 sm:mt-4 mr-1'><Image src={stars} alt="Github Repository" width={18}  height={20}/></div>
                <span className='font-medium text-medium  h-8 mt-4 sm:mt-4 text-zinc-700'> 17</span>
                <div className='ml-5 mt-4 sm:mt-4 mr-1'><Image src={github} alt="Github Repository"  width={20} height={20} /></div>
                <p className='font-medium text-medium h-fit mt-4 sm:mt-4 text-zinc-700'>8</p>
            </div>
        </div>
            <div className='border-2 border-zinc-300  h-40 w-fit sm:w-96 py-2 pl-2 pr-5 sm:pr-20 rounded-lg hover:md:scale-[1.01] hover:cursor-pointer' onClick={() => {
            window.open("https://github.com/oussamadhraief/ClaigsRist-Project", '_blank');
        }}>
            <div className='flex'>
            <div className='mt-1 mr-1'><Image src={projectIcon} alt="Github Repository" width={20}  height={18} /></div>
                <span className='ml-1 text-blue-500 hover:underline hover:cursor-pointer whitespace-nowrap'>E-commerce Website</span>
                <span className='border-2 rounded-full px-2 border-zinc-300 text-zinc-700 ml-3'>Public</span>
            </div>
            <p className='text-zinc-500 text-sm font-thin 2xl:font-normal h-20 overflow-hidden'>An E-commerce website created using HTML, CSS, JavaScript and Firebase.</p>
            <div className='flex max-h-5 mb-6 sm:mb-8'>
            <span className="bg-yellow-200 my-0 w-3 h-3 mt-5 sm:mt-5 rounded-full"></span><span className='mr-5 ml-1 mt-3.5'>JavaScript</span>
                <div className='mt-4 sm:mt-4 mr-1'><Image src={stars} alt="Github Repository" width={18}  height={20}/></div>
                <span className='font-medium text-medium  h-8 mt-4 sm:mt-4 text-zinc-700'> 13</span>
                <div className='ml-5 mt-4 sm:mt-4 mr-1'><Image src={github} alt="Github Repository"  width={20} height={20} /></div>
                <p className='font-medium text-medium h-fit mt-4 sm:mt-4 text-zinc-700'>2</p>
            </div>

        </div>


        <div className='border-2 border-zinc-300  h-40 w-fit sm:w-96 py-2 pl-2 pr-5 sm:pr-20 rounded-lg hover:md:scale-[1.01] hover:cursor-pointer' onClick={() => {
        window.open("https://www.linkedin.com/posts/oussama-dhraief_react-nextjs-tailwindcss-activity-6941719148536193024-nn0C?utm_source=share&utm_medium=member_desktop", '_blank');
    }}>
        <div className='flex'>
        <div className='mt-1 mr-1'><Image src={projectIcon} alt="Github Repository" width={20}  height={18} /></div>
            <span className='ml-1 text-blue-500 hover:underline hover:cursor-pointer whitespace-nowrap'>E-commerce Website</span>
            <span className='border-2 rounded-full px-2 border-zinc-300 text-zinc-700 ml-3'>Public</span>
        </div>
        <p className='text-zinc-500 text-sm font-thin 2xl:font-normal h-20 overflow-hidden'>An E-commerce website created using Next.js (ReactJS), Tailwind CSS, Node.js, MongoDB and Next-Auth.js.</p>
        <div className='flex max-h-5 mb-6 sm:mb-8'>
        <span className="bg-yellow-200 my-0 w-3 h-3 mt-5 sm:mt-5 rounded-full"></span><span className='mr-5 ml-1 mt-3.5'>JavaScript</span>
            <div className='mt-4 sm:mt-4 mr-1'><Image src={stars} alt="Github Repository" width={18}  height={20}/></div>
            <span className='font-medium text-medium  h-8 mt-4 sm:mt-4 text-zinc-700'> 22</span>
            <div className='ml-5 mt-4 sm:mt-4 mr-1'><Image src={github} alt="Github Repository"  width={20} height={20} /></div>
            <p className='font-medium text-medium h-fit mt-4 sm:mt-4 text-zinc-700'>12</p>
        </div>

        </div>
        <div className='border-2 border-zinc-300  h-40 w-fit sm:w-96 py-2 pl-2 pr-5 sm:pr-20 rounded-lg hover:md:scale-[1.01] hover:cursor-pointer' onClick={() => {
        window.open("https://www.linkedin.com/posts/oussama-dhraief_react-typescript-expressjs-activity-6983117367379640320-nMff?utm_source=share&utm_medium=member_desktop", '_blank');
    }}>
        <div className='flex'>
        <div className='mt-1 mr-1'><Image src={projectIcon} alt="Github Repository" width={20}  height={18} /></div>
            <span className='ml-1 text-blue-500 hover:underline hover:cursor-pointer whitespace-nowrap'>E-commerce Website</span>
            <span className='border-2 rounded-full px-2 border-zinc-300 text-zinc-700 ml-3'>Public</span>
        </div>
        <p className='text-zinc-500 text-sm font-thin 2xl:font-normal h-20 overflow-hidden'>An E-commerce website created using ReactJS, TypeScript, TailwindCSS, Node.js, Express.js, MongoDB, Stripe and PassportJS.</p>
        <div className='flex max-h-5 mb-6 sm:mb-8'>
        <span className="bg-blue-500 my-0 w-3 h-3 mt-5 sm:mt-5 rounded-full"></span><span className='mr-5 ml-1 mt-3.5'>TypeScript</span>
            <div className='mt-4 sm:mt-4 mr-1'><Image src={stars} alt="Github Repository" width={18}  height={20}/></div>
            <span className='font-medium text-medium  h-8 mt-4 sm:mt-4 text-zinc-700'> 15</span>
            <div className='ml-5 mt-4 sm:mt-4 mr-1'><Image src={github} alt="Github Repository"  width={20} height={20} /></div>
            <p className='font-medium text-medium h-fit mt-4 sm:mt-4 text-zinc-700'>5</p>
        </div>

        </div>

           
        </div>
    )
}