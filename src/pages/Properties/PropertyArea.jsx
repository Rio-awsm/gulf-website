import React from 'react'
import Framesvg from "../../../public/assets/Framesvg.svg";
import Cardforproperties from '../../components/Cardforproperties';

function PropertyArea() {
  return (
    <>
    <div className = "min-h-screen flex flex-col w-full px-6 lg:px-32">
      <div className= " text-center uppercase lg:text-6xl font-extrabold md:text-4xl text-2xl font-bebas text-[#024959]" > 
      all popular area
      </div>
      <div className= " text-center lg:text-lg md:text-4xl text-2xl text-black mb-6" > 
      Discover the best neighborhoods and communities in our region.
      </div>

      <div className = "flex lg:flex-row flex-col justify-center gap-4 ">
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "neighbourhood"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "business bay"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "district one"
      />
      </div>
      <div className = "flex lg:flex-row flex-col gap-8 lg:gap-1 justify-center mt-5 ">
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "downtown"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "dubai marina"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "jvc"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "world islands"
      />
      </div>

      <div className = "flex justify-center lg:flex-row flex-col gap-4 mt-5">
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "emaar beachfront"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "mbr al-merkad"
      />
      <Cardforproperties
      img={Framesvg}
      link = {"/"}
      heading = "sobha hartland"
      />
      </div>
      </div>
    </>
  )
}

export default PropertyArea