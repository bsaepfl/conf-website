'use client';
import { motion } from 'framer-motion';

const RegisterComponentL = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-transparent">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 w-full max-w-xl"  // Further reduced max width
      >

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-2 shadow-xl"  // Further reduced padding
        >
          <div className="relative w-full aspect-[16/9] min-h-[250px] overflow-hidden">
  <iframe 
    src="https://lu.ma/embed/calendar/cal-KuAvNkii7TFKkpK/events" 
    className="absolute inset-0 rounded-xl"
    style={{ 
      width: "140%",  // Increase width to capture more content
      height: "140%", // Increase height for better zoom-out effect
      transform: "scale(0.7)", // Scale down to fit within the original div
      transformOrigin: "top left", // Ensures it scales from the top-left corner
      border: "1px solid rgba(191, 203, 218, 0.533)",
      borderRadius: "8px",
    }}
    allowFullScreen
    aria-hidden="false"
    tabIndex={0}
  />
</div>

        </motion.div>

        
      </motion.div>
    </div>
  );
};

export default RegisterComponentL;
