import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-base-200 px-4 pt-20">
  <Hero />
</main>


      <Footer />
    </div>
  );
}
