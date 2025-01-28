import Navbar from '../components/Navbar';
import ManifestoComponent from '../components/Manifesto/ManifestoComponent';
import Footer from '../components/Footer';
import StarsBackground from '../components/StarsBackground';

const SponsorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center h-screen overflow-hidden justify-center pt-12 pb-24 bg-base-200"> {/* Added pb-24 for footer space */}
        <StarsBackground />
        <ManifestoComponent />
      </main>
      <Footer />
    </div>
  );
};


export default SponsorPage;
