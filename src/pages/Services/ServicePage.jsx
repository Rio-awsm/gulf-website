import React from "react";
import Navbar from "../../components/Navbar";
import Logo from "/assets/LogoBlack.svg";
import Footer from "../../components/Footer";
import ServiceHero from "./ServiceHero";
import FaqSection from "../AboutUs/FaqSection";
import BecomeOwners from "./BecomeOwners";

const ServicePage = () => {
  return (
    <main>
      <Navbar
        textcolor={"white"}
        justify={"center"}
        scrollbg={"black"}
        logo={Logo}
      />
      <section>
        <ServiceHero />
      </section>

      <section className="py-6">
        <FaqSection view={"hidden"} />
      </section>

      <section>
        <BecomeOwners />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default ServicePage;
