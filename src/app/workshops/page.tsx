// src/app/side-events/page.tsx
import Navbar from '../components/Navbar';
import WorkshopComponent from '../components/Workshops/WorkshopComponent';
import Footer from '../components/Footer';
import StarsBackground from '../components/StarsBackground';

const WorshopsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 bg-base-200">
        <StarsBackground />
        <WorkshopComponent />
      </main>
      <Footer />
    </div>
  );
};

export default WorshopsPage;
