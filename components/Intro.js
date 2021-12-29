import SideImage from "./SideImage"
import Description from './Description'

export default function Intro({ championData }){

    console.log(props.championData);

    return (
            <div className="mx-auto drop-shadow-2xl mt-10 pb-3 lg:pb-0 mb-5 h-fit w-11/12 xl:w-5/6 2xl:w-9/12 3xl:w-4/6 grid lg:flex shadow-3xl">
                <SideImage />
                <Description />
            </div>
    )
}


Intro.getServerSideProps = async () => {

    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => championData = data);
  
    // Pass data to the page via props
    return { props: { championData }}
  }
  

//<div>
//
//</div>