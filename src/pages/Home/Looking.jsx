import React from 'react';
import BrandCard from '../../components/BrandCard';
import looking from '/assets/looking.svg';

function Looking() {
  return (
    <section className='m-4 flex justify-center items-center'>
      <div className='flex flex-col  lg:items-start justify-center items-center '>
        <h1 className='uppercase text-[#024959] lg:text-6xl text-6xl font-bebas'>
          i’m looking to ...
        </h1>

        <div className="flex justify-center lg:gap-12 gap-4 lg:flex-row flex-col pt-6">
          <BrandCard
            img={looking}
            link={"/"}
            heading={"buy a home"}
            subheading1={"With thousands of homes, Gulf Estates can match you with a house you want to call home."}
          />
          <BrandCard
            img={looking}
            link={"/"}
            heading={"sell a home"}
            subheading1={"With quick support, Gulf Estates can help you easily sell your home or apartment quickly."}
          />
          <BrandCard
            img={looking}
            link={"/"}
            heading={"rent a home"}
            subheading1={"With filters and custom searches, Gulf Estates helps you easily find a house you'll love."}
          />
        </div>
      </div>
    </section>
  );
}

export default Looking;
