import React, { useState, useRef, useEffect } from "react";
import AnimatedCircles from "../animation/Circleanimation";

type Item = {
  name: string;
  icon: string;
  text: string;
};

const Highlights: React.FC = () => {
const original: Item[] = [ { icon: "/portfolio/icon1.png",name: "Equity Investments",text:"We provide majority or influential minority equity capital to healthcare businesses ready to scale. Our approach is rooted in partnership — bringing not only financial resources but also strategic guidance to help companies strengthen their foundation, expand their footprint, and achieve sustainable growth." }, { icon: "/portfolio/icon2.png",name: "Debt Financing",text:"We offer flexible debt solutions tailored to the unique needs of healthcare operators. Whether supporting expansion, acquisitions, or working capital, our credit structures are designed to provide stability and growth capacity — all while allowing owners to maintain control of their business." }, { icon: "/portfolio/icon3.png",name: "Hybrid Capital Solutions",text:"Recognizing that every healthcare company has different goals and challenges, we design creative hybrid structures that blend equity and debt. These solutions give operators the right balance of capital, flexibility, and alignment to pursue growth opportunities while preserving long-term vision." }, { icon: "/portfolio/icon3.png",name: "Operational and Strategic Support",text:"Beyond providing capital, we partner with leadership teams to solve operational challenges and accelerate performance. From navigating regulatory complexity to optimizing business processes and strategy, we bring expertise and resources that strengthen organizations and prepare them for long-term success." }, ];

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
     <div className="py-6">
            <h1 className=" md:text-3xl text-2xl text-center  text-white font-extrabold">Portfolio Highlights</h1>
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
                      ? "bg-[#82c0b8] text-white scale-95 shadow-md shadow-[#33557796]"
                      : "bg-[#79A8A2] text-black scale-95 shadow-md"
                  }
                `}
              >
<div className="w-24 h-24 flex items-center justify-center">
  <img
    src={box.icon}
    alt={box.name}
    className={`object-contain max-w-full max-h-full transition-all duration-300 ${
      index === active
        ? "brightness-0 invert scale-110"   // 👈 white ban jaye ga
        : "brightness-0 scale-100"
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
    </>
  );
};

export default Highlights;