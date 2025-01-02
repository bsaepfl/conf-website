import Image from "next/image";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StarsBackground from './components/StarsBackground'


export default function Home() {
  return (
    
    <div className="relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
