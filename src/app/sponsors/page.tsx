// src/app/sponsor/page.tsx
import Navbar from '../components/Navbar';
import SponsorsComponent from '../components/Sponsors/SponsorsComponent';
import Footer from '../components/Footer';

const SponsorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <SponsorsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default SponsorPage;
