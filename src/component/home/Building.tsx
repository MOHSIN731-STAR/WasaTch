import React from "react";
import { motion } from "framer-motion";


type AvatarProps = {
  src: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, className = "" }) => (
  <motion.img
    src={src}
    alt="user"
    className={`w-14 h-14 rounded-full shadow-md object-cover ${className}`}
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.3, rotate: 8 }}
  />
);

const Building = () => {
  return (
    <>
    <div className="flex flex-col  justify-center items-center md:py-6 md:px-14 py-2 px-4">
<h1 className="md:text-2xl md:font-extrabold text-xl font-bold font-kantum text-black">Building Trusted Partnerships</h1>
<p className=" items-center text-center text-black ">Now an established partner in the healthcare ecosystem, Wasatch Health continues to invest $5–25M in growth-ready <br className="" /> businesses, focusing on long-term value creation through equity, debt, and hybrid solutions.</p>
    </div>
    <div className="relative w-full h-[300px]  flex items-center justify-center overflow-hidden">
      {/* CENTER LOGO + RINGS */}
      <div className="relative z-20 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute md:w-36 md:h-36 w-32 h-32 border-2 border-white  bg-[#33577B33] opacity-45  rounded-full"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute md:w-32 md:h-32 w-28 h-28 border border-white bg-[#33577B33] rounded-full"
          initial={{ scale: 0.85, opacity: 0.5 }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        {/* Main Logo Circle */}
        <motion.div
          className="relative z-10 md:w-24 md:h-24 w-20 h-20 rounded-full bg-[#335577] flex items-center justify-center shadow-lg"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="/Group698.png"
            alt="logo"
            className="w-16 h-8 object-contain"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* SVG - Lines + End Logos + Avatars */}
      <svg
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        viewBox="0 0 1200 300"
        fill="none"
      >
        {/* LEFT TOP Curve */}
        <motion.path
          d="M600 150 C 490 150, 440 82, 340 82 S 200 82, 125 82"
          stroke="#8aa3b5"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        {/* LEFT BOTTOM Curve */}
        <motion.path
          d="M600 150 C 490 150, 440 218, 340 218 S 200 218, 125 218"
          stroke="#8aa3b5"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* RIGHT TOP Curve */}
        <motion.path
          d="M600 150 C 710 150, 760 82, 860 82 S 1000 82, 1075 82"
          stroke="#8aa3b5"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
        />

        {/* RIGHT BOTTOM Curve */}
        <motion.path
          d="M600 150 C 710 150, 760 218, 860 218 S 1000 218, 1075 218"
          stroke="#8aa3b5"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
        />

        {/* CENTER HORIZONTAL LINE */}
        <motion.line
          x1="125"
          y1="150"
          x2="1075"
          y2="150"
          stroke="#8aa3b5"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.8 }}
        />

        {/* End Logos (Left & Right) - same as before */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6, ease: "backOut" }}
        >
          <circle cx="115" cy="150" r="18" fill="#2f4b66" />
          <image href="/Ellipse163.png" x="103" y="138" width="24" height="24" />
        </motion.g>

        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "backOut" }}
        >
          <circle cx="1085" cy="150" r="18" fill="#2f4b66" />
          <image href="/Ellipse1.png" x="1073" y="138" width="24" height="24" />
        </motion.g>

        {/* End Dots */}
        <motion.circle cx="125" cy="82" r="4" fill="#8aa3b5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.9 }} />
        <motion.circle cx="125" cy="218" r="4" fill="#8aa3b5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.0 }} />
        <motion.circle cx="1075" cy="82" r="4" fill="#8aa3b5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.1 }} />
        <motion.circle cx="1075" cy="218" r="4" fill="#8aa3b5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} />

        {/* === AVATARS ATTACHED TO CURVE ENDS === */}

        {/* Left Top Curve End Avatar */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          <foreignObject x="105" y="55" width="70" height="70">
            <Avatar src="/Ellipse1.png" />
          </foreignObject>
        </motion.g>

        {/* Left Bottom Curve End Avatar */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          <foreignObject x="105" y="210" width="70" height="70">
            <Avatar src="/Ellipse2.png" />
          </foreignObject>
        </motion.g>

        {/* Right Top Curve End Avatar */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          <foreignObject x="1065" y="55" width="70" height="70">
            <Avatar src="/Ellipse121.png" />
          </foreignObject>
        </motion.g>

        {/* Right Bottom Curve End Avatar */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
        >
          <foreignObject x="1065" y="210" width="70" height="70">
            <Avatar src="/Ellipse123.png" />
          </foreignObject>
        </motion.g>
      </svg>

      {/* TITLE */}
      <motion.div
        className="absolute bottom-3 text-center w-full text-gray-700 font-medium text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Wasatch Health
        <br />
        <p className="text-[#79A8A2] text-bold text-2xl">$5–25M in growth</p>
      </motion.div>
    </div>
    
    </>
  );
};

export default Building;