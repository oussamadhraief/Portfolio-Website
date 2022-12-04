import HireMeButton from "./HireMeButton"
import ResumeDownloadButton from "./ResumeDownloadButton"

export default function ButtonsContainer(){
    return (
        <div className="flex justify-center space-x-2 lg:space-x-0 lg:justify-around">
            <HireMeButton styling="transition-all text-white border-2 mt-5 bg-transparent w-fit py-2 lg:py-3 px-4 lg:px-11 whitespace-nowrap rounded-md  text-lg lg:text-lg font-medium lg:font-bold hover:scale-110 hover:text-main hover:bg-white" />
            <ResumeDownloadButton styling="transition-all text-main mt-5 whitespace-nowrap bg-secondary w-fit py-2 lg:py-3 px-4 lg:px-8 rounded-md  text-lg lg:text-lg font-medium lg:font-bold hover:scale-110 hover:bg-white" />
        </div>
    )
}