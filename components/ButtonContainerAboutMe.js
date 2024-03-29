import HireMeButton from "./HireMeButton"
import ResumeDownloadButton from "./ResumeDownloadButton"

export default function ButtonContainerAboutMe(){

    return(
        <div className="mt-7 mb-3 lg:mb-3 pt-6 lg:pt-4 lg:pb-2 2xl:pt-20 3xl:pt-16 3xl:pb-3 pb-0 lg:mt-32 mx-auto h-fit w-fit flex flex-nowrap">
            <HireMeButton styling="transition-all text-white bg-main w-fit py-3 px-7 2xl:px-11 whitespace-nowrap rounded-xl font-sans text-lg 2xl:text-md font-medium 2xl:font-bold hover:scale-110 hover:text-white hover:bg-secondary" />
            <ResumeDownloadButton styling="transition-all ml-5 text-white  whitespace-nowrap  bg-secondary w-fit py-3 px-4 2xl:px-8 rounded-xl font-sans text-lg 2xl:text-md font-medium 2xl:font-bold hover:scale-110 hover:bg-main" />
        </div>
    )
}