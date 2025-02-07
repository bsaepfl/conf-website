// src/components/Sponsors/SponsorsComponent.tsx
import React from 'react';
import Sponsor from './Sponsor';
import './SponsorsComponent.css'; // Create this CSS file
import mina from '../../images/sponsors/mina.png';
import cardinal from '../../images/sponsors/cardinal.png';
import aleph from '../../images/sponsors/aleph.png';
import tha from '../../images/sponsors/tha.png';


const sponsorsData = [
  {
    logo: mina,
    name: '',
    link: 'https://minaprotocol.com/',
    tier: 'silver',
  },
  {
    logo: tha,
    name: '',
    link: 'https://www.hashgraph.swiss/',
    tier: 'gold',
  },
  {
    logo: cardinal,
    name: '',
    link: 'https://cardinal.co/',
    tier: 'silver',
  },
  {
    logo: aleph,
    name: '',
    link: 'https://alephzero.org/',
    tier: 'silver',
  },
];

const SponsorsComponent = () => {
  const tiers = ['platinum', 'gold', 'silver', 'bronze'];
  const tierTitles = {
    // platinum: 'Platinum Sponsors',
    gold: 'Gold Sponsors',
    silver: 'Silver Sponsors',
    // bronze: 'Bronze Sponsors',
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
  sm:text-4xl 
  text-2xl

  font-bold 
  text-center 
  mb-4 
  md:mb-8 
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
          <h2 className={`
  text-xl       // smaller on mobile
  md:text-2xl   // larger on desktop
  font-bold 
  text-center 
  mb-2 
  md:mb-4 
  ${tierGradientStyles[tier]}
`}>
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