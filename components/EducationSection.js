
export default function EducationSection(){
    return (
        <div id="EducationPart" className='h-72 pl-3 overflow-y-scroll space-y-6 sm:space-y-16 py-5 2xl:py-10'>

            <div className="grid sm:flex w-full justify-between mx-auto">
                <div className="grid max-w-max sm:w-fit">
                    <h1 className="font-medium text-secondary">Ecole Polytechnique Sousse</h1>
                    <p className="font-semibold">Software engineering degree</p>
                </div>
                <span className="rounded-full bg-secondary w-fit h-fit px-3 mt-3 sm:mt-0 py-1 font-medium text-white ml-3 whitespace-nowrap">2022-2025</span>
            </div>  

            <div className="grid sm:flex w-full justify-between mx-auto">
                <div className="grid max-w-max sm:w-fit">
                    <h1 className="font-medium text-secondary">Higher Institute of Applied Science and Technology of Sousse</h1>
                    <p className="font-semibold">Bachelor&apos;s degree of Computer Science</p>
                </div>
                <span className="rounded-full bg-secondary w-fit h-fit px-3 mt-3 sm:mt-0 py-1 font-medium text-white ml-3 whitespace-nowrap">2019-2022</span>
            </div>  

            <div className="grid sm:flex w-full justify-between mx-auto">
                <div className="grid max-w-max sm:w-fit">
                    <h1 className="font-medium text-secondary">Hammem Sousse II High School</h1>
                    <p className="font-semibold">High school diploma</p>
                </div>
                <span className="rounded-full bg-secondary w-fit h-fit px-3 mt-3 sm:mt-0 py-1 font-medium text-white ml-3 whitespace-nowrap">2015-2019</span>
            </div>  

        </div> 
    )
}