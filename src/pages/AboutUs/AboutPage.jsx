import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "/assets/LogoBlack.svg";
import AboutHero from "./AboutHero";
import Leadership from "./Leadership";
import FaqSection from "./FaqSection";

const AboutPage = () => {
  return (
    <main>
      <Navbar
        textcolor={"black"}
        font={"bold"}
        justify={"center"}
        scrollbg={"[#024959]"}
        logo={Logo}
      />

      <section className="mt-14">
        <AboutHero />
      </section>

      <section className="py-20">
        <Leadership />
      </section>

      <section className="mb-10">
        <FaqSection />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default AboutPage;
