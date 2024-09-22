import React from 'react'
import img1 from "/assets/img1.webp"
import img2 from "/assets/img2.webp"

function AboutSection() {
  return (
    <div className="h-[85vh] relative bg-[#024959] flex flex-col justify-center items-center md:block">
      <img
        src={img1}
        alt="Top Left Image"
        className="md:absolute md:top-0 md:left-0 object-cover py-4 lg:py-0  h-[25vh] lg:w-[30%] lg:h-[50%]"
      />
      <div className="lg:absolute lg:top-[50%] lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-white max-w-lg text-center md:text-left px-6 md:px-0">
        <h1 className="text-5xl md:text-8xl font-bebas">
          lorem ipsum <br /> dolor sit
        </h1>
        <p className="mt-4 font-light text-base md:text-lg tracking-wide text-zinc-300">
          Welcome to Gulf Estates, where we turn houses into homes and dreams into reality. At Gulf Estates, we understand that a home is more than just a physical space; it’s a place where memories are created, families grow, and life unfolds.
        </p>
      </div>
      <img
        src={img2}
        alt="Bottom Right Image"
        className="md:absolute md:bottom-0 md:right-0 object-cover pb-4 lg:pb-0 h-[25vh] lg:w-[30%] lg:h-[50%] mt-4 md:mt-0"
      />
    </div>
  )
}

export default AboutSection
