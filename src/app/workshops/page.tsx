// src/app/side-events/page.tsx
import Navbar from '../components/Navbar';
import WorkshopComponent from '../components/Workshops/WorkshopComponent';
import Footer from '../components/Footer';

const WorshopsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <WorkshopComponent />
      </main>
      <Footer />
    </div>
  );
};

export default WorshopsPage;
