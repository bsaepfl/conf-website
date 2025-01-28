'use client';
import { motion } from 'framer-motion';

const RegisterComponent = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-transparent">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 w-full max-w-4xl"
      >
        <h1 className="
  text-4xl 
  font-bold 
  text-center 
  mb-8 
  title-shine 
  bg-clip-text 
  text-transparent
  transition-all
  duration-300
  hover:scale-105
">
  REGISTER
</h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
        >
          <div className="relative w-full aspect-[4/3] min-h-[450px]">
            <iframe 
              src="https://lu.ma/embed/calendar/cal-KuAvNkii7TFKkpK/events" 
              width="100%" 
              height="100%" 
              className="absolute inset-0 w-full h-full rounded-xl"
              style={{ 
                border: '1px solid rgba(191, 203, 218, 0.533)',
                borderRadius: '8px',
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-black mt-4"
        >
          <p className="text-lg">
            Can't make it to the event? {' '}
            <a 
              href="mailto:contact@example.com" 
              className="text-primary hover:text-primary-focus underline transition-colors"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterComponent;
