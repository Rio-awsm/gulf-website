import React from 'react'
import Framesvg from "../../../public/assets/Framesvg.svg";
import Cardforproperties from '../../components/Cardforproperties';

function PropertyArea() {
  return (
    <>
    <div className = "min-h-screen flex flex-col w-full px-6 lg:px-32">
      <div className= " text-center uppercase text-7xl my-4 lg:text-9xl font-bebas text-[#024959]" > 
       popular areas
      </div>
      <div className= " text-center lg:text-lg md:text-4xl text-2xl text-black mb-6" > 
      Discover the best neighborhoods and communities in our region.
      </div>

      <div className = "flex lg:flex-row flex-col justify-center gap-4 ">
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Downtown"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Dubai Marina"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Emaar beachfront"
      />
      </div>
      <div className = "flex lg:flex-row flex-col gap-8 lg:gap-1 justify-center mt-5 ">
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "District one"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Sobha Hartland"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Meydan"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Dubai Creek Harbour"
      />
      </div>

      <div className = "flex justify-center lg:flex-row flex-col gap-4 mt-5">
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Dubai Heels Estate"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Business Bay"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "Dubai South"
      />
      </div>
      </div>
    </>
  )
}

export default PropertyArea