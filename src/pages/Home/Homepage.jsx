import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'
import AboutUsSection from './AboutUsSection'

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
    
    </main>
  )
}

export default Homepage
