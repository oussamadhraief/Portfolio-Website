import NavigationSideBar from './NavigationSideBar'
import ResumeContent from './ResumeContent'

export default function NavigatableResume(){
    return (
        <div className='grid md:flex w-11/12 xl:6/12 ml-0 mr-0 sm:mx-auto p-0 mt-12'>
            <NavigationSideBar />
            <ResumeContent />
        </div>
    )
}