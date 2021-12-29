import Image from 'next/image'

export default function ProjectComponent(props){

    const github = "gitthing_sxmnto.png"
    const stars = "star_r8dmt2.png"
    const projectIcon = "projectIcon_a5zrgp.png"

    return(
        <div className='border-2 border-zinc-300 w-full 2xl:w-4/6 py-2 pl-2 pr-5 sm:pr-20 rounded-lg hover:scale-105 hover:cursor-pointer' onClick={() => {
            window.open(props.linkToProject, '_blank');
        }}>
            <div className='flex'>
            <div className='mt-1 mr-1'><Image src={projectIcon} alt="Github Repository" width={20}  height={18} /></div>
                <span className='ml-1 text-blue-500 hover:underline hover:cursor-pointer whitespace-nowrap'>{props.projectTitle}</span>
                <span className='border-2 rounded-full px-2 border-zinc-300 text-zinc-700 ml-3'>Public</span>
            </div>
            <p className='text-zinc-500 font-thin 2xl:font-normal sm:whitespace-nowrap'>{props.projectDescription}</p>
            <div className='flex max-h-5 mb-6 sm:mb-8'>
            <span className='mr-5'><span className="font-extrabold text-5xl text-yellow-200 my-0 py-0">.</span>JavaScript</span>
                <div className='mt-7 sm:mt-7 mr-1'><Image src={stars} alt="Github Repository" width={18}  height={20}/></div>
                <span className='font-medium text-medium  h-8 mt-7 sm:mt-7 text-zinc-700'> {props.stars}</span>
                <div className='ml-5 mt-7 sm:mt-7 mr-1'><Image src={github} alt="Github Repository"  width={20} height={20} /></div>
                <p className='font-medium text-medium h-fit mt-7 sm:mt-7 text-zinc-700'>{props.forks}</p>
            </div>
        </div>
    )
}