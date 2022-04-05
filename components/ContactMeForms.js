import ContactMeOnSocials from './ContactMeOnSocials'
import ContactMeForm from './ContactMeForm'


export default function ContactMeForms(){

    

    return(
        <div className="grid w-full h-fit md:flex md:flex-nowrap md:justify-center md:items-center mb-10 border shadow-2xl mt-10 rounded-xl">
            <ContactMeOnSocials />
            <ContactMeForm />
        </div>
        
    )

}