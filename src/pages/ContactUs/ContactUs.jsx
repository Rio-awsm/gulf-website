import React from 'react'
import Navbar from '../../components/Navbar'
import Logo from "/assets/LogoBlack.svg";
import Footer from '../../components/Footer';
import ContactHero from './ContactForm';
import ContactForm from './ContactForm';

function ContactUs() {
  return (
    <main>
        <section>
        <Navbar
        textcolor={"black"}
        font={"bold"}
        justify={"center"}
        scrollbg={"[#024959]"}
        logo={Logo}
      />
        </section>

        <section className='py-20'>
            <ContactForm/>
        </section>

        <section>
            <Footer/>
        </section>
    </main>
  )
}

export default ContactUs