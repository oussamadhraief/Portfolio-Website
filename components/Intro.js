import SideImage from "./SideImage"
import Description from './Description'

export default function Intro(props){

    return (
            <div className="mx-auto grid mt-10 pb-3 rounded-lg lg:pb-0 mb-5 h-fit w-11/12 xl:w-5/6 2xl:w-9/12 3xl:w-4/6 border-[1px] shadow-lg">
                <div className="h-10 flex bg-neutral-100 space-x-2  items-center rounded-t-lg">
                    <span className="w-4 h-4 bg-red-400 rounded-full ml-5 shadow-2xl hover:cursor-pointer hover:scale-105"></span>
                    <span className="w-4 h-4 bg-yellow-500 rounded-full shadow-2xl hover:cursor-pointer hover:scale-105"></span>
                    <span className="w-4 h-4 bg-green-500 rounded-full shadow-2xl hover:cursor-pointer hover:scale-105"></span>
                </div>
                <div className="grid lg:flex w-full relative h-fit overflow-hidden">
                <SideImage />
                <Description />
                </div>
            </div>
    )
}


Intro.getServerSideProps = async () => {
    return { props: {fakeServer: "..."}}
  }