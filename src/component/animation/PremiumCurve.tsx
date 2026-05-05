import { useEffect, useRef, useState } from "react";

const PremiumCurve = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const progress = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const point = pathRef.current.getPointAtLength(progress.current * pathLength);
        setDotPos({ x: point.x, y: point.y });

        progress.current += 0.001; // ✅ FIX (smooth speed)
        if (progress.current > 1) progress.current = 0;

        animationFrame = requestAnimationFrame(animate);
      }
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-white overflow-hidden">
      
      {/* 🔵 Background Curve */}
      <svg
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
      >
        <path
          ref={pathRef}
          d="M 0 200 C 200 260, 400 260, 600 180 S 900 80, 1200 140"
          stroke="#e2e8f0"
          strokeWidth="1"
          fill="none"
        />

        {/* Dot Ring */}
        <circle cx={dotPos.x} cy={dotPos.y} r="6" fill="none" stroke="#94a3b8" />

        {/* Dot */}
        <circle cx={dotPos.x} cy={dotPos.y} r="2" fill="#64748b" />
      </svg>

      {/* 🧱 3 Column Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center h-full px-6  ">
        
        {/* 🔹 Left Text */}
        <div className="text-center md:text-center   ">
          <h2 className="text-xl font-extrabold ">Rooted in <br /> <span className="text-[#335577] md:text-right">The Wasatch Group</span></h2>
           <div className="flex flex-col md:leading-[-1000px] justify-center justify-items-center  md:mt-32 ">
          <h2 className="text-sm font-bold text-[#335577] leading-none ">Founded</h2>
          <p className=" text-[#79A8A2] text-2xl font-bold leading-5 ">2016</p>
        </div>
        </div>
       

        {/* 🔹 Center Image */}
        <div className="flex justify-center my-6 md:my-0">
          <img
            src="/curve.png"
            alt="Center"
            className="w-40 md:w-52 drop-shadow-2xl transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* 🔹 Right Text */}
        <div >
        <div className="text-center md:mt-6 ">
          <h2 className="text-[#79A8A2] text-sm font-bold leading-5">AUM</h2>
          <p className="text-[#79A8A2] text-2xl font-bold leading-5">1.5B+
          </p>
          
        </div>
<div className="flex flex-col mt-8 md:mt-24 z-50">
  <img src="/icon.png" alt="icon" className="w-6 h-6 mb-2" />
  
  <p className="font-medium text-sm ">
    Established as part of The Wasatch Group, a long-term private investment platform based in Utah, with decades of experience in building and supporting enduring businesses.
  </p>
</div>
</div>
      </div>
    </div>
  );
};

export default PremiumCurve;