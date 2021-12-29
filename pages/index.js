import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import MainSection from '../components/MainSection'
import AboutMeSection from '../components/AboutMeSection'
import Resume from '../components/Resume'
import ContactMeSection from '../components/ContactMeSection'
import Copyright from '../components/Copyright'

export default function Home({ championData }) {
  return (
    <div className='bg-gray-900 py-0 h-20'> 
      <Head>
        <title>Oussama Dhraief - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A passionate Software Developer with great ambitions."></meta>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/code.png"></link>
        <meta name="keywords" content="Oussema Dhraief , oussema.dhraief@gmail.com, Portfolio, Oussama Portfolio , web developer, full stack, full stack web developer, mobile app developer, computer science, tunisia, react , rest api, front-end, back-end, mern stack, nextjs, tailwind,css, nodejs , expressjs, reactjs , mongoose, redux, mongoDB" />
      </Head>
      <Header />
      <MainSection />
      <BackgroundImage />
      <AboutMeSection />
      <Resume />
      <ContactMeSection />
      <Copyright />
    </div>
  )
}

export default async function getServerSideProps() {

  fetch('https://api.imgflip.com/get_memes')
  .then(response => response.json())
  .then(data => championData = data);

  // Pass data to the page via props
  return { props: { championData }}
}


// to-slate-800 bg-gradient-to-br 