import Head from 'next/head'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import MainSection from '../components/MainSection'
import AboutMeSection from '../components/AboutMeSection'
import Resume from '../components/Resume'
import ContactMeSection from '../components/ContactMeSection'
import Copyright from '../components/Copyright'
import EyesFollow from '../components/EyesFollow'

export default function Home() {
  return (
    <div className='bg-gray-900 overflow-x-clip py-0 h-20'> 
      <Head>
        <title>Oussama Dhraief - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A passionate software developer with great ambitions."/>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/code.gif"></link>
        <meta name="googlebot" content="index, follow"/>
        <meta name="keywords" content="Oussema Dhraief , oussema.dhraief@gmail.com, Portfolio, Oussama Portfolio , web developer, full stack, full stack web developer, mobile app developer, computer science, tunisia, react , rest api, front-end, back-end, mern stack, nextjs, tailwind,css, nodejs , expressjs, reactjs , mongoose, redux, mongoDB" />
        <meta name='image' content="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png" />
        <meta itemProp="name" content="Oussama Dhraief - Portfolio"/>
        <meta itemProp="description" content="A passionate software developer with great ambitions."/>
        <meta property="og:title" content="Oussama Dhraief - Portfolio"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="www.oussama-dhraief.tech"/>
        <meta property="og:image" content="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png"/>
        <meta property="og:description" content="A passionate software developer with great ambitions."/>
        <meta itemProp='name' content="Oussama Dhraief - Portfolio"/>
        <meta itemProp='description' content="A passionate software developer with great ambitions."/>
        <meta itemProp='image' content="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png"/>
        <meta name="twitter:card" value="summary_large_image"/>
        <meta name="twitter:title" value="Oussama Dhraief - Portfolio"/>
        <meta name="twitter:description" value="A passionate software developer with great ambitions."/>
        <meta name="twitter:image" value="https://res.cloudinary.com/dwvwjxizk/image/upload/v1641491432/banner_b4lbdc.png"/>
      </Head>
      <Header />
      <MainSection />
      <BackgroundImage />
      <EyesFollow />
      <AboutMeSection />
      <Resume />
      <ContactMeSection />
      <Copyright />
    </div>
  )
}



// to-slate-800 bg-gradient-to-br 