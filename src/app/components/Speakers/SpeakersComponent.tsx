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

const speakersData = [
  {
    name: 'Peterson Yuhala',
    image: PY,
    description: 'Postdoctoral Reasearcher on confidentail computing at UniNE',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Guillaume Michel',
    image: GM,
    description: 'Research Engineer at Protocol Labs',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Mate Soos',
    image: MS,
    description: 'Etherum Foundation',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Feltroid Prime',
    image: FP,
    description: 'Applied Cryptography engineer',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Ziyi Guan',
    image: ZG,
    description: 'Ph.D. student at the EPFL theory group',
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
    name: 'Pim Keer',
    image: PK,
    description: 'Pre Doctoral researcher on Security and Privacy at TuWien',
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
    description: 'Developer relations Engineer at Midnight',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Simon Malatrait',
    image: SM,
    description: 'Smart Contract Hacker & Developper',
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
    description: 'Co-founder & CEO Fairmath',
    socials: {
      twitter: '',
      linkedin: '',
    },
  },
  {
    name: 'Sylve Chevet',
    image: SC,
    description: 'Co-founder & CEO Hylé',
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
    name: 'Akaki Mamageishvil',
    image: AM,
    description: 'Senior Research Scientist at Offchain Labs',
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
    name: 'Christian Knabenhans',
    image: CK,
    description: 'Ph.D. student at the EPFL COMPSEC lab',
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
    description: '',
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
            className="card bg-neutral text-white shadow-md p-6 flex flex-col items-start space-y-4 h-auto relative"
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
