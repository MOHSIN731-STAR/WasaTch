import { useEffect, useRef, useState } from "react";

const ZigzagArrow = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [showArrow, setShowArrow] = useState(false);

  const x1 = 240, y1 = 200;
  const x2 = 420, y2 = 40;

  const dx = x2 - x1;
  const dy = y2 - y1;

  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;

  const px = -uy;
  const py = ux;

  const arrowLength = 40;
  const arrowWidth = 20;

  const lineEndX = x2 - ux * arrowLength;
  const lineEndY = y2 - uy * arrowLength;

  const tip = [x2, y2];
  const left = [lineEndX + px * arrowWidth, lineEndY + py * arrowWidth];
  const right = [lineEndX - px * arrowWidth, lineEndY - py * arrowWidth];

  const pathD = `M 20 260 L 160 140 L 240 200 L ${lineEndX} ${lineEndY}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (pathRef.current) {
            const length = pathRef.current.getTotalLength();

            // initial state
            pathRef.current.style.strokeDasharray = `${length}`;
            pathRef.current.style.strokeDashoffset = `${length}`;

            // animate line
            setTimeout(() => {
              if (pathRef.current) {
                pathRef.current.style.transition =
                  "stroke-dashoffset 1.2s ease";
                pathRef.current.style.strokeDashoffset = "0";
              }
            }, 100);

            // show arrow after line animation
            setTimeout(() => setShowArrow(true), 100);
          }

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-tl from-[#79A8A2] to-[#142738] py-3 md:py-0 overflow-hidden"
    >
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative w-fit">

          <svg
            viewBox="0 0 500 300"
            className="w-[350px] md:w-[500px] relative z-10 -ml-6"
          >
            <defs>
              <linearGradient id="grad" x1="0" y1="300" x2="500" y2="0">
                <stop offset="0%" stopColor="#1B3650" />
              </linearGradient>
            </defs>

            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="url(#grad)"
              strokeWidth="20"
            />

            {showArrow && (
              <g
                style={{
                  transformOrigin: `${x2}px ${y2}px`,
                  animation: "pop 0.4s ease-out forwards",
                }}
              >
                <polygon
                  points={`${tip[0]},${tip[1]} ${left[0]},${left[1]} ${right[0]},${right[1]}`}
                  fill="url(#grad)"
                />
              </g>
            )}
          </svg>

          {/* FLOATING ICON */}
          <img
            src="/Group 702.png"
            alt=""
            className="absolute z-20 rounded-2xl shadow-md shadow-[#79A8A2]
              w-[70px] h-[70px] md:w-[90px] md:h-[90px]
              left-[110px] md:left-[150px] top-[30px] md:top-[85px] animate-bounce "
          />

          {/* HAND IMAGE */}
          <div className="md:mt-20 mt-12">
            <img
              src="/hand.png"
              alt=""
              className="absolute bottom-0 left-[-30px] md:left-[-20px]
                w-[510px] md:w-[490px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-white px-6 md:px-10 mt-10 md:mt-0 space-y-4">
          
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Focused on Healthcare <br /> Investment
          </h1>

          <p className="text-sm md:text-lg max-w-md">
            Created to address the unique challenges of healthcare, Wasatch
            Health began providing flexible capital and operational support to
            companies navigating complex and regulated environments.
          </p>

          <button className="bg-[#CEE4E1] text-[#335577] px-5 py-2 rounded-full text-sm">
            Investment Inquiries
          </button>
        </div>
        
      </div>

      {/* Arrow Animation */}
      <style>
        {`
          @keyframes pop {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default ZigzagArrow;