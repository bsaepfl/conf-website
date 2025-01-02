// components/Hero.tsx
import StarsBackground from './StarsBackground';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-base-200">
      <StarsBackground />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Our Conference</h1>
        <p className="text-xl text-white mt-4">Join us for an amazing experience</p>
      </div>
    </div>
  );
};

export default Hero;
