import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import placeholder from '../images/tickets/placeholder.webp';
import StarsBackground from '../components/StarsBackground';

// Define the data array with speaker information
const speakersData = [
  {
    name: 'Speaker 1',
    image: placeholder,
    description: 'Speaker 1 title or brief description here.',
    socials: {
      twitter: 'https://twitter.com/speaker1',
      linkedin: 'https://linkedin.com/in/speaker1',
    },
  },
  {
    name: 'Speaker 2',
    image: placeholder,
    description: 'Speaker 2 title or brief description here.',
    socials: {
      twitter: 'https://twitter.com/speaker2',
      linkedin: 'https://linkedin.com/in/speaker2',
    },
  },
  {
    name: 'Speaker 3',
    image: placeholder,
    description: 'Speaker 3 title or brief description here.',
    socials: {
      twitter: 'https://twitter.com/speaker3',
      linkedin: 'https://linkedin.com/in/speaker3',
    },
  },
  {
    name: 'Speaker 4',
    image: placeholder,
    description: 'Speaker 4 title or brief description here.',
    socials: {
      twitter: 'https://twitter.com/speaker4',
      linkedin: 'https://linkedin.com/in/speaker4',
    },
  },
];

const SpeakersPage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-black relative">
        <StarsBackground />
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 mb-16">
            Speakers
          </h1>
  
          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-screen-xl">
            {speakersData.map((speaker, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-md p-6 flex flex-col items-center space-y-4 h-72 w-80 relative"
              >
                {/* Photo Section */}
                <div className="avatar">
                  <div className="w-24 h-24 rounded">
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
                <div className="flex flex-col items-center text-center mt-4">
                  <h2 className="card-title text-white text-lg">{speaker.name}</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {speaker.description}
                  </p>
                </div>
                {/* Social Icons */}
                <div className="card-actions justify-center mt-auto">
                  <a
                    href={speaker.socials.twitter}
                    className="text-gray-400 hover:text-blue-500 tooltip"
                    data-tip="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={speaker.socials.linkedin}
                    className="text-gray-400 hover:text-blue-600 tooltip"
                    data-tip="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
  
          {/* Button Section */}
          <button className="btn btn-primary mt-12">
            Apply as speaker
          </button>
        </main>
  
        {/* Footer Section */}
        <Footer />
      </div>
    );
  };
  
  export default SpeakersPage;
