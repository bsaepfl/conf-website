// pages/SpeakersPage.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarsBackground from '../components/StarsBackground';
import SpeakersComponent from '../components/Speakers/SpeakersComponent';

const SpeakersPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-base-200">
      <StarsBackground />
      <Navbar />
      <div className="relative z-10 flex-grow">
        <SpeakersComponent />
      </div>
      <Footer />
    </div>
  );
};

export default SpeakersPage;
