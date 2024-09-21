import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'
import AboutUsSection from './AboutUsSection'
import aboutsection2 from "/assets/aboutsection2.webp"
import Looking from './Looking'

const Homepage = () => {
  return (
    <main className=''>
    <Navbar/>
     
     <section>
      <Hero />
     </section>

     <section>
      <AboutUsSection />
     </section>

     <section>
      <img src={aboutsection2} alt='img' className='mx-auto my-6 w-screen' />
     </section>

     <section>
      <Looking/>
     </section>
    
    </main>
  )
}

export default Homepage
