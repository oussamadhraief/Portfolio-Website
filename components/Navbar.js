import NavbarLink from "./NavbarLink"


export default function Navbar(){
    const link = "/"

    return(
        <nav className="pt-5 hidden lg:flex flex-nowrap mr-10">
            <NavbarLink 
            destinationSection="#" 
            linkName="Home"
            onclick='takeMeToASection' />
            <NavbarLink 
            destinationSection="#AboutMe" 
            linkName="About Me"
            onclick='takeMeToASection' />
            <NavbarLink
            destinationSection="#Resume" 
            linkName="Education"
            onclick='educationLink'
             />
            <NavbarLink 
            destinationSection="#Resume" 
            linkName="Experience" 
            onclick ="experienceLink"
            />
            <NavbarLink 
            destinationSection="#Resume" 
            linkName="Skills" 
            onclick ="skillsLink"
            />
            <NavbarLink 
            destinationSection="#Resume" 
            linkName="Projects" 
            onclick ="projectsLink"
            />
            <NavbarLink 
            destinationSection="#ContactMe" 
            linkName="Contact Me"
            onclick='takeMeToASection'
             />
        </nav>
    )
}

