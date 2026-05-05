
import { motion } from 'framer-motion';

const AnimatedCircles = () => {
  return (
    <div className="flex justify-end items-start">   {/* Changed to justify-end for right side */}
      
      {/* Outer Ring */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
        transition={{ 
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.5 }
        }}
        className="flex items-center justify-center md:w-28 md:h-28 w-24 h-24 rounded-full  border border-white  bg-[#33577B33] opacity-45 "
      >
        
        {/* Middle Ring */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ 
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.1 } 
          }}
          className="flex items-center justify-center w-20 h-20 rounded-full border border-white bg-[#33577B1A]"
        >
          
          {/* Inner Circle / Icon */}
          <motion.img 
            src="/icon.png" 
            alt="icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.6 
            }}
            className="w-16 h-16 rounded-full object-cover"
            style={{
              background: 'linear-gradient(135deg, #466a85 0%, #6d9a98 100%)',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          
        </motion.div>
      </motion.div>

    </div>
  );
};

export default AnimatedCircles;