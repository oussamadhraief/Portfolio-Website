import Title from "./Title";
import { useState,useEffect } from "react";
import ContactMeForms from './ContactMeForms'

export default function ContactMeSection(){

    const [contactClasses,setContactClasses] = useState('p-0 mt-7 grid mx-auto w-11/12 xl:w-4/6 invisible')

    useEffect(() => {
        const sectionOneOptions = {
            rootMargin: "0px 0px -200px 0px"
        };

        const sectionTwoObserver = new IntersectionObserver(function (
                entries,
                sectionTwoObserver
            ) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setContactClasses('p-0 mt-7 grid mx-auto w-11/12 xl:w-4/6 visible animate__animated animate__fadeInUp')
                    }
                });
            },
            sectionOneOptions);

        sectionTwoObserver.observe(document.getElementById("ContactMe"));
    })

    return(
        <div id="ContactMe" className={contactClasses}>
            <Title mainTitle="Contact Me" secondaryTitle="Discuss a project with me !" />
            <ContactMeForms />
        </div>
    )
}