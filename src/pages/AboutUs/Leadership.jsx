import React from "react";
import pic from "/assets/team.webp"; // replace with your image path

const Leadership = () => {
  const teamMembers = [
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
    { name: "LOREM IPSUM", designation: "Designation" },
  ];

  return (
    <div className="lg:px-40 px-8">
      <div className=" font-bebas mb-8">
        <h2 className="lg:text-8xl text-6xl tracking-wider text-[#024959] lg:ml-[10%]">LEADERSHIP</h2>
        <p className="lg:text-6xl text-4xl tracking-wider text-[#F2762E] mt-2 ml-[30%] lg:ml-[25%]">MEET OUR TEAM</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg p-6 flex flex-col items-center justify-between"
          >
            <img
              src={pic}
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
