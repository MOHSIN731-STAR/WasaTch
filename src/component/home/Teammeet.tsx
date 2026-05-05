
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
  return (
    <>
 <div className="bg-[#C5D7EC] py-8 pb-16 px-6 rounded-xl m-2">
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 font-playfair">
    Meet the Team
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-36 lg:gap-48 place-items-center md:px-36   lg:px-44">
    {team.map((member, index) => (
      <div
        key={index}
        className="group relative w-[280px] md:w-[170px] lg:w-[260px] h-[330px] px-4"
      >
        
        {/* CARD */}
        <div
          className="absolute top-0 left-0 w-full rounded-xl overflow-hidden shadow-md 
                     bg-white hover:bg-[#335577] hover:text-white 
                     transition-all duration-300
                     group-hover:h-[390px]  h-[320px] pb-8"
        >
          {/* Image */}
          <div className="p-2">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[240px] object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="px-3 pb-3">
            <h3 className="text-base font-semibold">{member.name}</h3>
            <p className="text-xs opacity-80 mb-1">{member.role}</p>

            <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
              {member.description}
            </p>
          </div>
        </div>

      </div>
    ))}
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
    </>
  );
};

export default TeamSection;