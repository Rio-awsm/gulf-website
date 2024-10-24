import React from "react";
import setapart from "/assets/setapart.png";
import HeadingCapsule from "../../components/HeadingCapsule";
import { CircleCheck, Medal, PenLine } from "lucide-react";
import { Slide } from "react-awesome-reveal";

const SetApart = () => {
  return (
    <section className="max-w-8xl mx-auto px-5 lg:py-10 lg:px-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse lg:gap-16 gap-5">
        <img src={setapart} alt="about" className="mx-auto" />

        <div className="pt-4">
          {/* <Slide direction="up">
            <HeadingCapsule text={"Our Benefits"} />
          </Slide> */}
          <Slide direction="up">
            <h1 className="text-[#024959] font-bebas text-7xl lg:text-8xl mb-2 ">
              what sets us apart
            </h1>
          </Slide>

          <div className="lg:text-xl text-lg  text-black/60 pr-20">
            <div className="py-5">
              <Slide>
                <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                  <Medal className="text-[#F2762E] w-10 h-10 mr-2" />
                  PROVEN EXPERTISE
                </h1>
                <p>
                  The expertise that our professionals bring to the table will
                  help you to make decisions that are not only confident but
                  also provide a high return on investment.
                </p>
              </Slide>
            </div>

            <div className="py-6">
              <Slide direction="up">
                <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                  <PenLine className="text-[#F2762E] w-10 h-10 mr-2" />
                  CUSTOMIsED SOLUTIONS
                </h1>
                <p>
                  At Gulf Estates, we will take time to understand your unique
                  taste so that we can find the perfect property that aligns
                  with your needs.
                </p>
              </Slide>
            </div>

            <div className="py-6">
              <Slide>
                <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                  <CircleCheck className="text-[#F2762E] w-10 h-10 mr-2" />
                  TRANSPARENT PARTNERSHIPS
                </h1>
                <p>
                  Transparency is what we believe in Gulf Estates. We believe in
                  having open and honest communication at every stage of your
                  buying journey.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetApart;
