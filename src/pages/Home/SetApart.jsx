import React from "react";
import setapart from "/assets/setapart.webp";
import HeadingCapsule from "../../components/HeadingCapsule";
import { CircleCheck, Medal, PenLine } from "lucide-react";

const SetApart = () => {
  return (
    <section className="max-w-8xl mx-auto px-5 lg:py-10 lg:px-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse lg:gap-16 gap-5">
        <img src={setapart} alt="about" className="mx-auto" />

        <div className="pt-4">
          <div>
            <HeadingCapsule text={"Our Benefits"} />
          </div>
          <h1 className="text-[#024959] font-bebas text-7xl pt-12 lg:pt-0 lg:text-8xl mb-2">
            what sets us apart
          </h1>

          <div className="lg:text-xl text-lg  text-black/60 pr-20">
            <div className="py-6">
              <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                <Medal className="text-[#F2762E] w-10 h-10 mr-2" />
                PROVEN EXPERTISE
              </h1>
              <p>
              Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.
              </p>
            </div>

             <div className="py-6">
              <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                <PenLine className="text-[#F2762E] w-10 h-10 mr-2" />
                CUSTOMIZED SOLUTIONS
              </h1>
              <p>
              We pride ourselves on crafting personalized strategies to match your unique goals, ensuring a seamless real estate journey.
              </p>
            </div>

            <div className="py-6">
              <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                <CircleCheck className="text-[#F2762E] w-10 h-10 mr-2" />
                TRANSPARENT PARTNERSHIPS
              </h1>
              <p>
              Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetApart;
