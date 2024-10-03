import React from "react";
// import pic from "/assets/team.webp";

const Leadership = () => {
  const teamMembers = [
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team1.png",
    },
    {
      name: "Maximilien Photiou",
      designation: "Property Advisor",
      image: "/assets/team2.png",
    },
    {
      name: "Nikhil suvarna",
      designation: "Sales Manager",
      image: "/assets/team3.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team4.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team5.png",
    },
    {
      name: "Anna Zhurlova",
      designation: "designation",
      image: "/assets/team6.png",
    },
    {
      name: "Ahmad Alhamad",
      designation: "Property Advisor",
      image: "/assets/team7.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team8.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team9.png",
    },
    {
      name: "Nailia Gaisina",
      designation: "Property Advisor",
      image: "/assets/team10.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team11.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team12.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team13.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team14.png",
    },
    {
      name: "Maria Matos",
      designation: "Property Advisor",
      image: "/assets/team15.png",
    },
    {
      name: "Neha Sharma",
      designation: "Business Development",
      image: "/assets/team16.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team17.png",
    },
    {
      name: "LOREM IPSUM",
      designation: "designation",
      image: "/assets/team18.png",
    },
    {
      name: "Ariana Versace",
      designation: "Property Advisor",
      image: "/assets/team19.png",
    },
  ];

  return (
    <div className="lg:px-40 px-8">
      <div className=" font-bebas lg:mb-8 ">
        <h2 className="lg:text-8xl text-6xl tracking-wider text-[#024959] lg:ml-[10%]">
          LEADERSHIP
        </h2>
        <p className="lg:text-6xl text-4xl tracking-wider text-[#F2762E] mt-2 ml-[30%] lg:ml-[25%]">
          MEET OUR TEAM
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg p-6 flex flex-col items-center justify-between"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[90%] h-auto object-cover mb-4"
            />
            <div className="flex flex-col self-start  ml-[5%] ">
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
