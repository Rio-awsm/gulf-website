import React from "react";
import { Slide } from "react-awesome-reveal";
// import pic from "/assets/team.webp";

const Leadership = () => {
  const teamMembers = [
    {
      name: "Nikhil suvarna",
      designation: "Sales Manager",
      image: "/assets/team3.png",
    },
    {
      name: "Neha Sharma",
      designation: "Business Development Manager",
      image: "/assets/team16.webp",
    },
    {
      name: "Sangeeth Kumar",
      designation: "Property Advisor",
      image: "/assets/team1.png",
    },
    {
      name: "Maximilien Photiou",
      designation: "Property Advisor",
      image: "/assets/team2.png",
    },

    {
      name: "Eldar Mamedov",
      designation: "Property Advisor",
      image: "/assets/team5.png",
    },
    {
      name: "Anna Zhurlova",
      designation: "Property Advisor",
      image: "/assets/team6.png",
    },
    {
      name: "Ahmad Alhamad",
      designation: "Property Advisor",
      image: "/assets/team7.png",
    },
    {
      name: "Olga Ghostyukhina",
      designation: "Property Advisor",
      image: "/assets/team8.png",
    },
    {
      name: "Louisa Oumatouk",
      designation: "Property Advisor",
      image: "/assets/team9.png",
    },
    {
      name: "Nailia Gaisina",
      designation: "Property Advisor",
      image: "/assets/team10.png",
    },

    {
      name: "Aigul Minibaeva",
      designation: "Property Advisor",
      image: "/assets/team13.png",
    },
    {
      name: "Omar Inamdar",
      designation: "Property Advisor",
      image: "/assets/team14.png",
    },
    {
      name: "Maria Matos",
      designation: "Property Advisor",
      image: "/assets/team15.png",
    },
    {
      name: "Ariana Versace",
      designation: "Property Advisor",
      image: "/assets/team19.png",
    },
    {
      name: "Jasmina Obradov",
      designation: "Property Advisor",
      image: "/assets/team17.png",
    },
    {
      name: "Bijal Paleja",
      designation: "Admin Coordinator",
      image: "/assets/team12.png",
    },
    {
      name: "Chandrika Repaka",
      designation: "Admin Coordinator",
      image: "/assets/team18.png",
    },
    {
      name: "Emad Sadek",
      designation: "Customer Service Executive",
      image: "/assets/team11.png",
    },
    {
      name: "Kaveesha Fernando",
      designation: "Cinematographer",
      image: "/assets/team4.png",
    },
    {
      name: "Roemelle Santos	",
      designation: "Captain",
      image: "/assets/team20.webp",
    },
  ];

  return (
    <div className="lg:px-40 px-8 overflow-hidden">
      <div className=" font-bebas lg:mb-8 ">
        <Slide>
          <h2 className="lg:text-8xl text-7xl tracking-wider text-[#024959] text-center lg:text-left lg:ml-[10%]">
            LEADERSHIP
          </h2>
        </Slide>
        <Slide direction="right">
          <p className="lg:text-6xl text-4xl tracking-wider text-[#F2762E] mt-2 text-center lg:text-left lg:ml-[25%]">
            MEET OUR TEAM
          </p>
        </Slide>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg p-6 flex flex-col items-center justify-between transform transition-transform duration-500 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[90%] h-auto object-cover mb-4"
            />
            <div className="flex flex-col self-start ml-[5%]">
              <h3 className="text-4xl font-bebas mb-2">{member.name}</h3>
              <p className="text-gray-600 text-xl">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
