import React, { useState, useRef, useEffect } from "react";
import AnimatedCircles from "../animation/Circleanimation";

type Item = {
  name: string;
  icon: string;
  text: string;
};

const Highlights: React.FC = () => {
const original: Item[] = [
  {
    icon: "/marketfoucs/icon.png",
    name: "Aging Population",
    text: "Increasing need for chronic care and advanced diagnostics."
  },
  {
    icon: "/marketfoucs/icon2.png",
    name: "Data-Driven Growth Strategies",
    text: "Continuous advancements in devices, biotech, and drug delivery."
  },
  {
    icon: "/marketfoucs/icon3.png",
    name: "Outsourcing and Onshoring",
    text: "Reshoring critical production for resilience."
  },
];
  const boxes: Item[] = [
    original[original.length - 1],
    ...original,
    original[0],
  ];

  const [active, setActive] = useState<number>(1);
  const [perView, setPerView] = useState(3); // 👈 dynamic boxes
  const trackRef = useRef<HTMLDivElement>(null);

  // ✅ RESPONSIVE HANDLER
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setPerView(2); // tablet
      } else {
        setPerView(3); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActive((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    const track = trackRef.current;
    if (!track) return;

    if (active === boxes.length - 1) {
      track.style.transition = "none";
      setActive(1);
      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s";
      });
    }

    if (active === 0) {
      track.style.transition = "none";
      setActive(boxes.length - 2);
      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s";
      });
    }
  };

  return (
    <>
    <div className="bg-[#1B3650]">
     <div className="py-6 ">
            <h1 className=" md:text-5xl text-2xl text-center  text-white font-extrabold">Key sustained demand <br /> drivers include</h1>
        </div>
    
    <div className="w-full flex justify-center py-10">
       
      <div className="relative w-full max-w-[1100px] overflow-hidden px-2">

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${active * (100 / perView)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {boxes.map((box, index) => (
            <div
              key={index}
              className="px-3 flex items-center justify-center"
              style={{ minWidth: `${100 / perView}%` }} // 👈 dynamic width
            >
              <div
                className={`
                  w-full h-auto flex flex-col py-2  items-center justify-center gap-3
                  rounded-xl transition-all duration-300 px-4  
                  ${
                    index === active
                      ? "bg-[#78A8A1] text-white scale-95 shadow-md shadow-[#33557796]"
                      : "bg-[#EEF1F1] text-black scale-95 shadow-md"
                  }
                `}
              >
<div className="w-24 h-24 flex items-center justify-center">
  <img
    src={box.icon}
    alt={box.name}
    className={`object-contain max-w-full max-h-full transition-all duration-300 h-16 w-16 ${
    index === active
  ? "brightness-0 invert scale-110"
  : "brightness-0  invert-[73%] sepia-[12%] saturate-[1200%] hue-rotate-[140deg] scale-100"
    }`}
  />
</div>

                <p className="text-lg font-extrabold font-playfair text-center">
                  {box.name}
                </p>

                <span className="text-sm text-center pb-8">
                  {box.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div
          onClick={handleNext}
          className="absolute top-1/4 md:right-48 md:left-12 lg:left-12 right-2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer lg:right-60"
        >
          <AnimatedCircles />
        </div>
      </div>
    </div>
    <p className="text-white text-sm text-center px-6 pb-10">At Wasatch Health, we target these dynamics, investing in essential innovations that deliver human impact while generating attractive,<br/> low-correlation returns. Our strategy focuses on sectors like outsourced services, medical devices & diagnostics, pharmaceuticals & <br /> biotech, and clinical services, where we can apply our expertise to catalyze growth and efficiency.</p>
    </div>
    </>
  );
};

export default Highlights;