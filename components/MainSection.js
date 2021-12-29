import IdentityImage from "./IdentityImage"
import BriefSummary from "./BriefSummary"

export default function MainSection(){
    return (
        <div className="bg-gray-900 py-5 mt-0 sm:pt-10 md:pt-0 flex flex-col-reverse px-10 sm:px-0 sm:flex-row justify-center w-screen h-fit">
            <BriefSummary />
            <IdentityImage />
        </div>
    )
}