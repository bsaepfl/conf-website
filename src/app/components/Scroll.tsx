// components/Hero.tsx
import StarsBackground from './StarsBackground';
import Hero from './Hero';
import Sponsors from './Sponsors/SponsorsComponent';

const Scroll = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-base-200">
      <StarsBackground />
      <div>
        <Hero />
        <Sponsors />
      </div>
    </div>
  );
};

export default Scroll;
