import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PropertiesHero from './PropertiesHero'
import PropertyShow from './PropertyShow'
import PropertyArea from './PropertyArea'
import PropertyFooter from './PropertyFooter'

function PropertiesPage() {
  return (
    <main>
      <Navbar/>

      <section>
        <PropertiesHero/>
      </section>

      <section>
        <PropertyShow/>
      </section>

      <section>
        <PropertyArea/>
      </section>

      <section>
        <PropertyFooter/>
      </section>



      <Footer/>
    </main>
  )
}

export default PropertiesPage