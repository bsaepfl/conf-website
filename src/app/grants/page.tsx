// src/app/grant/page.tsx
import Navbar from '../components/Navbar';
import GrantsComponent from '../components/Grants/GrantsComponent';
import Footer from '../components/Footer';

const GrantPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <GrantsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default GrantPage;
