import { useState } from "react";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

export default function AnimatedText(){

    return (
        <span className="text-white font-thin w-full lg:w-20 text-center whitespace-nowrap text-base sm:text-xl">
            <Typewriter
        words={['Computer Science Student','Full-Stack Developer', 'Mern Stack Enthusiast', 'Future Software Engineer']}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      /></span>
    )
}

