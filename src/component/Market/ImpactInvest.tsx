import React, { useState } from "react";

type CardItem = {
  title: string;
  description: string;
  image: string;
};

const data: CardItem[] = [
  {
    title: "Aging Population",
    description: "Supports investments in chronic disease management and elder care technologies.",
    image: "/marketfoucs/impact1.png",
  },
  {
    title: "Innovation Cycles",
    description: "Enables backing of R&D-efficient companies and smart devices.",
    image: "/marketfoucs/impact2.png",
  },
  {
    title: "Outsourcing and Onshoring",
    description: "Targets contract manufacturing and logistics solutions for supply chain resilience.",
    image: "/marketfoucs/impact3.png",
  },
  {
    title: "Regulatory Standards",
    description: "Focuses on compliance-heavy areas like lab services and sterilization.",
    image: "/marketfoucs/impact4.png",
  },
];

const InvestmentCards: React.FC = () => {
  const [active, setActive] = useState(0);
  const [activeBtn, setActiveBtn] = useState<"left" | "right" | null>(null);

  const next = () => {
    if (active < data.length - 1) {
      setActive(active + 1);
    }
    setActiveBtn("right");
  };

  const prev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
    setActiveBtn("left");
  };

  return (
    <div className="w-full px-6 md:px-10 py-14 ">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold">
          Impact on <br /> Investment Strategy
        </h2>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className={`w-12 h-12 rounded-full border  flex items-center justify-center transition
            ${
              activeBtn === "left"
                ? "bg-[#6D8F87] text-white"
                : "bg-white border border-[#282828] hover:bg-gray-200"
            }`}
          >
            ←
          </button>

          <button
            onClick={next}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition
            ${
              activeBtn === "right"
                ? "bg-[#6D8F87] text-white"
                : "bg-white hover:bg-gray-200  border border-[#282828]"
            }`}
          >
            →
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid gap-5 w-[100%] 
          grid-cols-1 md:grid-cols-4">

          {data.map((card, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300
              ${
                index === active
                  ? "bg-[#335577] text-white scale-105 shadow-2xl shadow-[#33557796]"
                  : "bg-white"
              }`}
            >
              <div className="h-[180px] p-3">
                <img
                  src={card.image}
                  className={`w-full h-full object-cover rounded-lg
                  ${
                    index === active
                      ? ""
                      : ""
                  }`}
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  {card.title}
                </h3>
                <p
                  className={`text-sm ${
                    index === active
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default InvestmentCards;