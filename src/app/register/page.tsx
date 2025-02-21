// src/app/tickets/page.tsx
import NavbarR from '../components/NavbarR';
import Footer from '../components/Footer';
import StarsBackground from '../components/StarsBackground';
import RegisterComponent from '../components/RegisterComponent/RegisterComponent';


const TicketsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarR />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 bg-base-200">
        <StarsBackground />
        <RegisterComponent />
      </main>
      <Footer />
    </div>
  );
};

export default TicketsPage;
