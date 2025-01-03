// src/app/side-events/page.tsx
import Navbar from '../components/Navbar';
import SideEventsComponent from '../components/SideEvents/SideEventsComponent';
import Footer from '../components/Footer';

const SideEventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <SideEventsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default SideEventsPage;
