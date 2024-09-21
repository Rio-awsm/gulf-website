import React from 'react'
import ContactUsforhome from "/assets/ContactUsforhome.webp"

function ContactUsIntegration() {
  return (
    <section className = " mt-[10.6rem] md:mt-[10.8rem] lg:mt-[15.4rem] relative flex lg:flex-col items-center justify-center min-h-screen w-full">
        <div className = "relative items-center justify-center flex flex-col">

            <h1 className = " uppercase font-bebas text-3xl lg:text-9xl text-white text-center">We're always eager <br /> to hear from you!</h1>
            <p className= "  text-xl lg:text-2xl text-white text-center mt-2 lg:mt-0 px-6 lg:px-0">Whether you're dreaming of a new home or seeking the perfect investment, our team is <br /> here to help you every step of the way. Reach out today and let's turn that vision into reality!</p>
            <button className="mt-6 lg:mt-8 bg-white text-black px-6 py-3 hover:bg-orange-500 duration-150">
          Contact Us
        </button>
        </div>

        <div
        className = "absolute w-full h-[50vh] lg:h-screen bg-cover -z-10"
        style = {{
            backgroundImage: `url(${ContactUsforhome})`
        }}
        />
    </section>
  )
}

export default ContactUsIntegration