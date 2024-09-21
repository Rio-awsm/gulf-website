import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "/assets/LogoBlack.svg";

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

      <section className="h-screen"></section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default AboutPage;
