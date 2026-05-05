import React, { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
};

const data: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    title: "Sage One Strategy",
    description: "Wasatch Health helped us scale with confidence.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Jason Miller",
    title: "Entrepreneurs for Everyone",
    description: "This strategy made a real difference.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Laura Kim",
    title: "Sandra & Dimitri Photograph",
    description: "They balance financial results with care.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Robert Hayes",
    title: "Sandra & Dimitri",
    description: "A partner we deeply trust.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Slider: React.FC = () => {
  const [active, setActive] = useState(1);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeBtn, setActiveBtn] = useState<"prev" | "next" | null>(null);

  // ✅ screen detect
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);      // mobile
      else if (window.innerWidth < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3);                               // desktop
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  // ✅ dynamic visible cards
  const getVisible = () => {
    if (visibleCount === 1) return [data[active]];

    if (visibleCount === 2) {
      const nextIndex = (active + 1) % data.length;
      return [data[active], data[nextIndex]];
    }

    const prevIndex = (active - 1 + data.length) % data.length;
    const nextIndex = (active + 1) % data.length;
    return [data[prevIndex], data[active], data[nextIndex]];
  };

  const visibleCards = getVisible();

  return (
    <div className="w-full py-8 md:py-16 bg-gradient-to-b from-[#EEF1F1] to-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <h2 className="md:text-4xl text-2xl font-bold leading-tight font-playfair px-16">
            See What Our <br className="hidden md:block" /> Partner’s Say
          </h2>

         <div className="flex gap-3 md:px-4 px-16">
  <button
    onClick={() => {
      prev();
      setActiveBtn("prev");
    }}
    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
    ${
      activeBtn === "prev"
        ? "bg-[#79A8A2] text-white"
        : "border-2 border-white"
    }`}
  >
    ←
  </button>

  <button
    onClick={() => {
      next();
      setActiveBtn("next");
    }}
    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
    ${
      activeBtn === "next"
        ? "bg-[#79A8A2] text-white"
        : "border-2 border-white"
    }`}
  >
    →
  </button>
</div>
        </div>

        {/* Cards */}
        <div className="flex justify-center  gap-3 md:gap-16 overflow-hidden mb-3">
          {visibleCards.map((item, index) => {
            const isCenter =
              visibleCount === 3 ? index === 1 : index === 0;

            return (
              <div
                key={item.id}
                className={`relative w-[260px] mt-8 sm:w-[280px] md:w-[260px] lg:w-[300px] p-5  rounded-2xl transition-all duration-500
                ${isCenter
                  ? "bg-[#2f4f6f] text-white scale-95 md:scale-95 shadow-md shadow-slate-400"
                  : "bg-white opacity-90 scale-95 shadow-md"
                }`}
              >
                {/* Avatar */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full absolute -top-5 left-5 border-4 border-white"
                />

                <div className="mt-6">
                  <h3 className="font-semibold mb-2 text-base md:text-lg">
                    {item.title}
                  </h3>

                  <p className={`text-sm mb-4 ${isCenter ? "text-gray-200" : "text-gray-600"}`}>
                    {item.description}
                  </p>

                  <div className="text-[#79A8A2] mb-3">★★★★★</div>

                  <hr className="mb-3 opacity-30" />

                  <p className="text-sm font-medium">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Slider;