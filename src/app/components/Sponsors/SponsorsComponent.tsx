// src/components/Sponsors/SponsorsComponent.tsx
import React from 'react';
import Sponsor from './Sponsor';
import StarsBackground from '../StarsBackground';
import placeholder from '../../images/tickets/placeholder.webp';

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

  return (
    <div className="relative container mx-auto py-8">
      <StarsBackground />
      <h1 className="text-4xl font-bold text-center justify-center mb-8">Sponsors</h1>
      {tiers.map((tier) => (
        <div key={tier} className="mb-8">
          <h2 className={`text-3xl font-bold mb-4 ${tier === 'platinum' ? 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
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
