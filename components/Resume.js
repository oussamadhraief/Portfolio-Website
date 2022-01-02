import Title from './Title'
import NavigatableResume from './NavigatableResume'
import { useEffect, useState } from 'react'
import 'animate.css'


export default function Resume(){

    const [resumeClasses,setResumeClasses] = useState('content-center w-11/12 lg:w-9/12 2xl:w-7/12 p-3 mx-auto grid mt-12 invisible')

    useEffect(() => {
        const sectionOneOptions = {
            rootMargin: `0px 0px -${window.innerHeight - 100}px 0px`
        };

        const sectionOneObserver = new IntersectionObserver(function (
                entries,
                sectionOneObserver
            ) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setResumeClasses('content-center w-11/12 lg:w-9/12 2xl:w-7/12 p-3 mx-auto grid mt-12 visible animate__animated animate__fadeInUp')
                    }
                });
            },
            sectionOneOptions);

        sectionOneObserver.observe(document.getElementById("AboutMe"));
    })

    return (
        <div id="Resume" className={resumeClasses}>
            <Title mainTitle="Resume" secondaryTitle="Everything you need to know about me"/>
            <NavigatableResume />
        </div>
    )
}