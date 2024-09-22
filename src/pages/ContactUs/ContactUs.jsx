import React from 'react'
import Navbar from '../../components/Navbar'
import Logo from "/assets/LogoBlack.svg";
import Footer from '../../components/Footer';
import ContactHero from './ContactForm';
import ContactForm from './ContactForm';
import ContactFooter from './ContactFooter';

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

        <section className='pt-20'>
            <ContactForm/>
        </section>

        <section>
            <ContactFooter/>
        </section>

        <section>
            <Footer/>
        </section>
    </main>
  )
}

export default ContactUs