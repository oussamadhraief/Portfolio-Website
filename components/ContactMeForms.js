import ContactMeOnSocials from './ContactMeOnSocials'
import ContactMeForm from './ContactMeForm'


export default function ContactMeForms(){

    

    return(
        <div className="grid w-full h-fit md:flex md:h-[520px] mb-10 border-2 shadow-2xl mt-10 rounded-xl">
            <ContactMeOnSocials />
            <ContactMeForm />
        </div>
        
    )

}