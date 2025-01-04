import Navbar from '../components/Navbar';
import ManifestoComponent from '../components/Manifesto/ManifestoComponent';
import Footer from '../components/Footer';

const SponsorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <ManifestoComponent />
      </main>
      <Footer />
    </div>
  );
};

export default SponsorPage;
