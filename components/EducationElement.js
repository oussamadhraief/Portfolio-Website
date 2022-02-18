export default function EducationElement(props){
    return(
        <div className="grid sm:flex w-full justify-between mx-auto">
            <div className="grid max-w-max sm:w-fit">
                <h1 className="font-medium text-secondary">{props.institute}</h1>
                <p className="font-semibold">{props.degree}</p>
            </div>
            <span className="rounded-full bg-secondary w-fit h-fit px-3 mt-3 sm:mt-0 py-1 font-medium text-white ml-3 whitespace-nowrap">{props.year}</span>
        </div>
    )
}