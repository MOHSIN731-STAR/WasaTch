import  { useState } from "react";
import AnimatedCircles from '../animation/Circleanimation'

const team = [
  {
    name: "Michael Hall",
    role: "Managing Partner",
    image: "/jan.png",
    description:
      "Michael has over 20 years of experience in private equity and healthcare services. Before founding Wasatch Health, he led investments in multi-site healthcare platforms.",
  },
  {
    name: "Jan Goodwin",
    role: "Principal, Investments",
    image: "/micheam.png",
    description:
      "Focused on sourcing and executing investments across healthcare sectors.",
  },
  {
    name: "Trevor Lund",
    role: "Principal, Investments",
    image: "/trevor.png",
    description:
      "Experienced in scaling healthcare businesses and operational strategy.",
  },
];
const apart=[
  { icons: "/icons/icons1.png", 
    name: "Flexible Capital",
    role: "Tailored equity, debt, and hybrid solutions designed to meet the unique needs of healthcare businesses.",
    },
  { icons: "/icons/icons3.png",
    name: "Strategic Partnership",
    role: "Hands-on support that goes beyond capital, helping operators navigate complexity and accelerate growth.",
  },
  { icons: "/icons/Group2.png",
    name: "Long-Term Focus",
    role: "Backed by The Wasatch Group, we prioritize enduring success over short-term gains.",
  },
]

const TeamSection = () => {
   const [active, setActive] = useState(0);
  return (
    <>
 <div className="bg-[#1B3650] bg-gradient-to-bl from-[#79A8A2] to-[ #1B3650] py-8 pb-16 px-6 rounded-xl m-2">
  <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12 font-playfair">
    Leadership Team
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-40 lg:gap-48 place-items-center md:px-16   lg:px-44 relative">


        {/* Cards */}
        {team.map((item, index) => (
          <div
            key={index}
            className={` md:w-[240px]  w-[240px] rounded-xl overflow-hidden transition-all duration-300
            ${
              active === index
                ? "bg-[#335577] text-white   p-3"
                : "bg-gray-100 text-black p-3"
            }`}
          >
            <img
              src={item.image}
              className="w-full h-[260px] object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm opacity-70">{item.role}</p>

              {active === index && (
                <p className="text-xs mt-2  pb-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* CENTER CIRCLE */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative md:left-[186px] -top-36 md:top-0">
            
            {/* outer glow */}
           

            {/* button */}
            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % team.length)
              }
              className="relative  rounded-full  flex items-center justify-center  transition"
            >
             <AnimatedCircles />
            </button>
          </div>
        </div>

      </div>

  </div>

    <div className=" py-8 px-6 rounded-xl m-2">
      <h5 className="md:text-4xl lg:text-4xl text-2xl font-extrabold text-center font-playfair py-4">What Sets Us Apart</h5>
<div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-56 lg:gap-64 place-items-center md:px-36 py-16  lg:px-44">

{apart.map((member, index) => (
  <div
    key={index}
    className="relative w-[280px] h-[280px] lg:w-[280px] lg:h-[280px] md:w-[200px]  md:h-[200px]"
  >
    {/* CARD */}
    <div
      className="absolute w-full rounded-xl overflow-hidden shadow-md 
                 bg-[#EEF1F1]  h-[280px] py-0 pb-3 flex flex-col justify-center items-center"
    >
      {/* Image */}
      <div className="p-3 py-3">
        <img
          src={member.icons}
          alt={member.name}
          className="w-14 h-14 object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-4 py-4">
        <h3 className="text-lg text-black py-2 text-center font-playfair  font-bold">{member.name}</h3>
        <p className="text-sm opacity-80 mb-2 text-center font-playfair">{member.role}</p>
      </div>
    </div>
  </div>
))}
</div>
    </div>
    {/* AnimatedCircles */}
 
    </>
  );
};

export default TeamSection;