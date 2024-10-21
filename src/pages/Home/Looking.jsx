import React from "react";
import Bcard from "../../components/Bcard";
import looking from "/assets/looking.svg";
import { Fade, Slide } from "react-awesome-reveal";

function Looking() {
  return (
    <section className="m-4 flex justify-center items-center">
      <div className="flex flex-col  lg:items-start justify-center items-center ">
        <Slide>
          <h1 className="uppercase text-[#024959] lg:text-6xl text-6xl font-bebas">
            i’m looking to ...
          </h1>
        </Slide>

        <div className="flex justify-center lg:gap-12 gap-4 lg:flex-row flex-col pt-6">
          <Fade>
            <Bcard
              img={looking}
              link={"/"}
              heading={"buy a home"}
              subheading1={
                "Explore the finest homes in Dubai with us that align and suit your budget and style. "
              }
              subheading2={""}
            />
          </Fade>

          <Fade>
            <Bcard
              img={looking}
              link={"/"}
              heading={"Rent a home"}
              subheading1={
                "Ready to rent your home with confidence? Let our expert advice and market insights give you a seamless selling experience! "
              }
              subheading2={""}
            />
          </Fade>

          <Fade>
            <Bcard
              img={looking}
              link={"/"}
              heading={"Lease a home"}
              subheading1={
                "Find your ideal lease that satisfies all your needs. Contact us for hassle-free home leasing. "
              }
              subheading2={""}
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Looking;
