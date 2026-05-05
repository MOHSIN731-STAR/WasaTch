import React, { useState, useRef, useEffect } from "react";
import AnimatedCircles from "../animation/Circleanimation";

type Item = {
  name: string;
  icon: string;
  text: string;
};

const Highlights: React.FC = () => {
const original: Item[] = [ { icon: "/portfolio/icon1.png",name: "Canyon Labs",text:"Canyon Labs is a leading provider of testing and consulting services for the medical device and pharmaceutical industries. Specializing in microbiology, analytical chemistry, packaging, and biocompatibility testing, they offer a comprehensive one-stop-shop for....  See More." }, { icon: "/portfolio/icon2.png",name: "Metrodora Institute",text:"Metrodora Institute is a cutting-edge medical clinic and research center dedicated to advancing care for neuroimmune axis disorders, including conditions like ME/CFS, fibromyalgia, POTS, and long COVID. Located in a 60,000-square-foot facility in West Valley City, Utah, they ....  See More." }, { icon: "/flexable/biomeric.png",name: "Biomerics Health",text:"Biomerics is a vertically integrated contract manufacturer specializing in interventional medical devices. With over 3,200 team members across 12 facilities, 25+ years of experience, and more than 250 engineers, they provide end-to-end solutions from design and prototyping to ....  See More" },  ];

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
     <div className="py-2 pt-12 flex justify-center items-center flex-col gap-2 p-4">
            <h1 className=" md:text-3xl text-2xl text-center  text-black font-extrabold">Highlighted Partners</h1>
            <span className=" text-sm text-center text-gray-600">We are proud to partner with innovative healthcare companies that align with our <br /> mission. Here are three examples from our portfolio:</span>
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
                      : "bg-[#EEF1F1] text-black scale-95 shadow-md"
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