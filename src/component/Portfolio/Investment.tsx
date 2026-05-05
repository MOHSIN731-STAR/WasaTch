import React, { useState } from "react";

type Card = {
  title: string;
  icon: string;
};

const cards: Card[] = [
  {
    title: "Partnership Over Transaction",
    icon: "/portfolio/fi_584593.png",
  },
  {
    title: "Data-Driven Growth Strategies",
    icon: "/portfolio/data.png",
  },
  {
    title: "Scalable and Ethical Healthcare Innovation",
    icon: "/portfolio/scale.png",
  },
];

const Investment: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="bg-[#f5f5f5] py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="md:text-4xl text-2xl font-serif font-semibold mb-4">
        Our Investment Philosophy
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We invest with purpose — focusing on long-term value creation,
        operational excellence, and measurable healthcare impact.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-xl p-10 transition-all duration-300 flex flex-col items-center justify-center border
                ${
                  isActive
                    ? "bg-[#335577] text-white shadow-2xl shadow-slate-400"
                    : "bg-[#EEF1F1] text-gray-800"
                }
              `}
            >
              {/* Icon */}
              <img
                src={card.icon}
                alt={card.title}
                className={`w-14 h-14 mb-6 transition-all duration-300
                  ${isActive ? " shadow-lg" : "opacity-70"}
                `}
              />

              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-center leading-snug">
                {card.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Investment;