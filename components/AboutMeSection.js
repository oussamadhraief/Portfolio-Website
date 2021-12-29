import Intro from './Intro'
import Title from './Title'
import { useState, useEffect } from 'react'
import 'animate.css'

export default function AboutMeSection(){

    const [aboutClasses,setAboutClasses] = useState('p-0 w-screen mt-7 grid mx-auto invisible')

    useEffect(() => {
        const sectionOneOptions = {
            rootMargin: "0px 0px -500px 0px"
        };

        const sectionOneObserver = new IntersectionObserver(function (
                entries,
                sectionOneObserver
            ) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setAboutClasses('p-0 w-screen mt-7 grid mx-auto visible animate__animated animate__fadeInUp')
                    }
                });
            },
            sectionOneOptions);

        sectionOneObserver.observe(document.getElementById("AboutMe"));
    })

    return (
    <div id='AboutMe' className={aboutClasses}>
        <Title mainTitle="About Me" secondaryTitle="Why you should choose me ?"/>
        <Intro />
    </div>)
}