import { useEffect } from "react"

export default function EyesFollow(){

    useEffect(() => {
        document.body.addEventListener('mousemove', (e) => {
            const eye = document.getElementById('eyeball')
            let mouseX = (eye.getBoundingClientRect().left)
            let mouseY = (eye.getBoundingClientRect().top)
            let radianDegrees = Math.atan2(e.clientX - mouseX, e.clientY - mouseY)
            let rotationDegrees = (radianDegrees * (180 / Math.PI) * -1) + 180;
            const eyes = document.getElementById('rotations')
            eyes.style.transform = `rotate(${rotationDegrees}deg)`
        })
        
        window.onscroll = () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                document.getElementById('fullMonster').style.visibility = 'hidden'
            }else{
                document.getElementById('fullMonster').style.visibility = 'visible'

            }
        }
    })

    return(
            <div id="fullMonster" className="fixed visible hidden md:flex flex-nowrap left-3 z-50 bottom-2 animate-pulse">
            <div className="relative w-1.5 h-1.5 mt-[26px] rounded-full bg-yellow-500">
                
            </div>
            <div className="w-1.5 h-0.5 mt-6 bg-yellow-500 -rotate-45">
                
            </div>
           
            <div id="monster" className="relative w-10 pt-px h-12 bg-yellow-500 rounded-full">
                <div id="eye" className="eye relative mx-auto w-5 h-5 bg-white rounded-full">
                    <div id="rotations" className="relative w-full h-full">
                        <div id="eyeball" className="relative m-2 w-2 h-2 bg-gray-900 rounded-full">
                        </div>
                    </div>
                </div>
                <div className="relative w-3 h-2 bg-black mx-auto mt-1 rounded-lg">
                    <div className="relative w-1 h-0.5 bg-white mx-auto ">
                        
                    </div>
                    <div className="relative mt-0.5 w-2 h-1 bg-red-400 mx-auto rounded-t-lg">
                        
                    </div>
                </div>
            </div>
            <div className="w-1.5 h-0.5 mt-6 bg-yellow-500 rotate-45">
                
            </div>
            <div className="relative w-1.5 h-1.5 mt-[26px] rounded-full bg-yellow-500">
                
            </div>
            </div>
    )
}