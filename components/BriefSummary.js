import SummaryInformation from "./SummaryInformation";
import AnimatedText from "./AnimatedText"
import ButtonsContainer from "./ButtonsContainer";

export default function BriefSummary(){
    return(
        <div className="grid content-center ml-5">
            <SummaryInformation />
            <h1 className="text-white text-center font-bold text-xl lg:text-3xl">Hello, I&apos;m <span className="font-bold text-secondary">Oussama Dhraief</span></h1>
            <AnimatedText />
            <ButtonsContainer />
        </div>
    )
}