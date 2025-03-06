// components/SpeakersComponent.tsx
import Image from 'next/image';
import placeholder from '../../images/tickets/placeholder.webp';
import PY from '../../images/speakers/PY.png';
import GM from '../../images/speakers/GM.jpeg';
import FP from '../../images/speakers/FP.jpeg'; 
import ZG from '../../images/speakers/ZG.jpg';
import fxw from '../../images/speakers/fxw.jpg';
import PK from '../../images/speakers/PK.jpeg';
import MS from '../../images/speakers/MS.jpg';
import MK from '../../images/speakers/MK.png';
import q from '../../images/speakers/q.jpg';
import HA from '../../images/speakers/HA.jpeg';
import GA from '../../images/speakers/GA.jpeg';
import SC from '../../images/speakers/SC.jpeg'; 
import SM from '../../images/speakers/SM.jpeg';
import K from '../../images/speakers/K.jpg';
import AM from '../../images/speakers/AM.jpeg';
import AL from '../../images/speakers/AL.jpeg';
import CK from '../../images/speakers/CK.png';
import NS from '../../images/speakers/NS.jpeg';
import PJ from '../../images/speakers/PJ.jpeg';
import S from '../../images/speakers/S.jpg';
import JB from '../../images/speakers/JB.jpg';
import JBW from '../../images/speakers/JBW.jpg';
import MO from '../../images/speakers/MO.jpeg';
import YG from '../../images/speakers/YG.jpeg';
import AS from '../../images/speakers/AS.jpeg';
import LB from '../../images/speakers/LB.jpg';
import JPA from '../../images/speakers/JP-A.jpeg';
import LK from '../../images/speakers/LK.jpeg';
import MR from '../../images/speakers/MR.jpeg';
import ABH from '../../images/speakers/ABH.jpeg';
import VA from '../../images/speakers/VA.jpeg';
import BS from '../../images/speakers/BS.jpeg';
import IMH from '../../images/speakers/IMH.jpeg';
import LH from '../../images/speakers/LH.jpeg';
import R from '../../images/speakers/R.jpg';
import T from '../../images/speakers/T.jpeg';
import AT from '../../images/speakers/AT.jpeg';
import ER from '../../images/speakers/ER.jpg';
import DS from '../../images/speakers/DS.jpeg';
import PM from '../../images/speakers/PM.jpeg';
import BQ from '../../images/speakers/BQ.jpeg';
import JD from '../../images/speakers/JD.jpeg';


const speakersData = [
  {
    name: 'Peterson Yuhala',
    image: PY,
    description: 'Postdoctoral Researcher on confidential computing at UniNE',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Guillaume Michel',
    image: GM,
    description: 'Research Engineer at Interplanetary Shipyard',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Mate Soos',
    image: MS,
    description: 'Ethereum Foundation',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Micha Roon',
    image: MR,
    description: 'Head of Engineering at the Hashgraph Association',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Feltroid Prime',
    image: FP,
    description: 'Applied Cryptography Engineer, member of Herodotus and Garaga',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Ziyi Guan',
    image: ZG,
    description: 'Ph.D. student at the EPFL Theory Group',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'JP Aumasson',
    image: JPA,
    description: 'CSO & Co-founder of Taurus Group',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Maxim Orlovsky',
    image: MO,
    description: 'Director at the Institue for Distributed and Congnitive Systems',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Bettina Sosa',
    image: BS,
    description: 'Head of DevRel at Partisia',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Jeff Burdges',
    image: JBW,
    description: 'Applied Cryptography Researcher at Web3 Foundation',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Ariel Ben Hattar',
    image: ABH,
    description: 'CMTA',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Laura Kiviharju',
    image: LK,
    description: 'Data Protection Cybersecurity & AI Governance Specialist',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'François Xavier Wicht',
    image: fxw,
    description: 'PhD student in the Cryptology and Data Security Group at UniBern',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Rie',
    image: R,
    description: 'Chief of staff at Intmax',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Yunus Gürlek',
    image: YG,
    description: 'Mina Community Core Developer - zkVot',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: ' Alan Szepieniec',
    image: AS,
    description: 'co-founder of Neptune Cash',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: ' Luis Bezzenberger',
    image: LB,
    description: 'Product Lead at Brainbot for Shutter Network',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Pim Keer',
    image: PK,
    description: 'Pre-doctoral researcher on Security and Privacy at TU Wien',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Maciej Kalka',
    image: MK,
    description: 'Researcher at VLayer Labs',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Claude Bardeciej',
    image: q,
    description: 'Developer Relations Engineer at Midnight',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Simon Malatrait',
    image: SM,
    description: 'Smart Contract Hacker & Developer',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Julian Deschler',
    image: JD,
    description: 'Co-Founder of Arcium',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Handan Alper',
    image: HA,
    description: 'Researcher at =Nil',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Gurgen Arakelov',
    image: GA,
    description: 'Co-founder & CEO of Fairmath',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Leona Hioki',
    image: LH,
    description: 'Co-founder of Intmax',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Sylve Chevet',
    image: SC,
    description: 'Co-founder & CEO of Hylé',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Piotr Mikołajczyk',
    image: PM,
    description: 'Aleph Zero',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Damian Straszak',
    image: DS,
    description: 'Aleph Zero',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Kassandra.eth',
    image: K,
    description: 'Cryptographer',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Akaki Mamageishvili',
    image: AM,
    description: 'Senior Research Scientist at Offchain Labs',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Amit Taaki',
    image: AT,
    description: 'Darkfi',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Alexander Linton',
    image: AL,
    description: 'President of the Session Technology Foundation',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Trang',
    image: T,
    description: 'Founder of Holistik',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Christian Knabenhans',
    image: CK,
    description: 'Ph.D. student at the EPFL COMPSEC lab',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Isla Munro',
    image: IMH,
    description: 'Zuitzerland',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Nicolas Sierro',
    image: NS,
    description: 'Product & Project Manager at Privately',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Vlad Avelson',
    image: VA,
    description: 'Zuitzerland and Cosimo Capital',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Bastiaan Quast',
    image: BQ,
    description: 'ValiQ Security GmbH',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Phillip Jovanovic',
    image: PJ,
    description: 'Full Professor in Information Security at UCL',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Sisyphus',
    image: S,
    description: 'Exploration Team Lead at Starkware',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Jordi Baylina',
    image: JB,
    description: 'Co-Founder of Polygon & Privado ID.',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Einar Rasmussen',
    image: ER,
    description: 'Inversed Tech',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
];

const SpeakersComponent = () => {
  return (
    <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <h1 className="
        text-4xl 
        font-bold 
        text-center 
        mb-12 
        title-shine 
        bg-clip-text 
        text-transparent
        transition-all
        duration-300
        hover:scale-105
        text-white
      ">
        SPEAKERS
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-screen-xl">
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            className="card bg-secondary text-white shadow-md p-6 flex flex-col items-start space-y-4 h-auto relative"
          >
            {/* Photo Section */}
            <div className="avatar flex justify-center w-full">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
            {/* Name and Description Section */}
            <div className="text-left">
              <h2 className="card-title text-xl mb-2">{speaker.name}</h2>
              <p className="text-sm text-black mb-4">
                {speaker.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Button Section */}
      <button className="btn btn-primary btn-wide text-white transform transition-transform duration-300 hover:scale-105 active:scale-95 mt-12">
        Apply as speaker
      </button>
    </main>
  );
};

export default SpeakersComponent;
