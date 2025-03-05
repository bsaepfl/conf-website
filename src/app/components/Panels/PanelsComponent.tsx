
import React from 'react';
import Panel from './Panel';

const panelsData = [
  {
    title: 'Privacy Tech',
    description: 'What are the technologies needed for blockchain privacy?',
    link: "https://www.kaleido.io/blockchain-blog/blockchain-privacy-for-evm",
    speakers: ['Elodie', 'Sylve', 'Karol Podufalski', 'Micha Roon', 'Cedric Maire'],
  },
  {
    title: 'Privacy applications',
    description: 'Does privacy have use cases?',
    link: "https://www.forbes.com/councils/forbestechcouncil/2024/02/15/blockchain-and-data-privacy-the-future-of-technology-compliance/",
    speakers: ['Vlad Avesalon', 'Yunus Gürlek', 'Luis Bezzenberger', 'Einar Rasmussen'],
  },
  {
    title: 'TradFI & DeFi',
    description: 'How can privacy integrate with TradFi and DeFi?',
    link: "https://blog.economie-numerique.net/2022/02/17/differences-between-decentralized-finance-defi-and-traditional-finance-concerning-privacy/",
    speakers: ['Isla Munro', 'Bettina Sosa', 'JP Aumasson', 'Damian Straszak', 'Micha Roon'],
  },
  {
    title: 'Regulations',
    description: 'Regulation in privacy enhancing technologies',
    link: "https://www.mhc.ie/latest/insights/privacy-enhancing-technologies-key-considerations",
    speakers: ['Géraldine Monchau ', 'Trang', 'Laura Kiviharju', 'Rie', 'Ariel Ben Hattar'],
  },
  {
    title: "ZK scalability",
    description: 'Verifiability: scaling blockchain to new heights through zero-knowledge proofs',
    link: "https://cointelegraph.com/news/zksync-2025-roadmap-scalable-blockchain-privacy-tech",
    speakers: ['Antoine', 'Alan Szepieniec', 'Jordi Baylina', 'Handan Kilinc Alper', 'Leona Hioki'],
  },
];

const PanelsComponent = () => {
  return (
    <div className="
    relative 
    container 
    mx-auto 
    py-4           
    md:py-8        
    px-4           
    md:px-8       
  ">
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
        Panels
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-1">
        {panelsData.map((event, index) => (
          <div
            key={index}
            className={`
              ${index === panelsData.length - 1 ? 'sm:col-span-2 flex justify-center' : ''}
            `}
          >
            <Panel
              title={event.title}
              link={event.link}
              description={event.description}
              speakers={event.speakers}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelsComponent;
