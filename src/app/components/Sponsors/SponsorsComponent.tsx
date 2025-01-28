// src/components/Sponsors/SponsorsComponent.tsx
import React from 'react';
import Sponsor from './Sponsor';
import StarsBackground from '../StarsBackground';
import placeholder from '../../images/tickets/placeholder.webp';
import './SponsorsComponent.css'; // Create this CSS file


const sponsorsData = [
  {
    logo: placeholder,
    name: 'Sponsor 1',
    link: 'https://sponsor1.com',
    tier: 'platinum',
  },
  {
    logo: placeholder,
    name: 'Sponsor 2',
    link: 'https://sponsor2.com',
    tier: 'gold',
  },
  {
    logo: placeholder,
    name: 'Sponsor 3',
    link: 'https://sponsor3.com',
    tier: 'silver',
  },
  {
    logo: placeholder,
    name: 'Sponsor 4',
    link: 'https://sponsor4.com',
    tier: 'bronze',
  },
];

const SponsorsComponent = () => {
  const tiers = ['platinum', 'gold', 'silver', 'bronze'];
  const tierTitles = {
    platinum: 'Platinum Sponsors',
    gold: 'Gold Sponsors',
    silver: 'Silver Sponsors',
    bronze: 'Bronze Sponsors',
  };

  // With hover effects and transitions


// Or with more elaborate gradient effects
const tierGradientStyles = {
  platinum: `
    shine-effect
    bg-gradient-to-r from-[#1a1a1a] via-[#404040] to-[#1a1a1a]
    hover:from-[#2a2a2a] hover:via-[#505050] hover:to-[#2a2a2a]
    text-transparent bg-clip-text
    transition-all duration-300
    relative
  `,
  gold: `
    bg-gradient-to-r from-[#FFD700] to-[#FFA500]
    hover:from-[#FFE700] hover:to-[#FFB500]
    text-transparent bg-clip-text
    transition-all duration-300
  `,
  silver: `
    bg-gradient-to-r from-[#C0C0C0] to-[#A9A9A9]
    hover:from-[#D0D0D0] hover:to-[#B9B9B9]
    text-transparent bg-clip-text
    transition-all duration-300
  `,
  bronze: `
    bg-gradient-to-r from-[#CD7F32] to-[#8B4513]
    hover:from-[#DD8F42] hover:to-[#9B5523]
    text-transparent bg-clip-text
    transition-all duration-300
  `,
};


  return (
    <div className="relative container mx-auto py-8">
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
  SPONSORS
</h1>
      {tiers.map((tier) => (
        <div key={tier} className="mb-8">
          <h2 className={`text-2xl font-bold text-center mb-4 ${tierGradientStyles[tier]}`}>
            {tierTitles[tier]}
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {sponsorsData
              .filter((sponsor) => sponsor.tier === tier)
              .map((sponsor, index) => (
                <Sponsor
                  key={index}
                  logo={sponsor.logo}
                  name={sponsor.name}
                  link={sponsor.link}
                  tier={sponsor.tier}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorsComponent;
