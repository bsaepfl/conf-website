import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hackathon/HeroView';
import ApplyView from '../components/Hackathon/ApplyView';
import ScheduleView from '../components/Hackathon/ScheduleView';
import PrizeView from '../components/Hackathon/PrizeView';
import DiscoverSuiView from '../components/Hackathon/DiscoverSuiView';
import LocationView from '../components/Hackathon/LocationView';
import FaqView from '../components/Hackathon/FaqView';
import RulesView from '../components/Hackathon/RulesView';

export default function Hackathon() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-base-200">
        <Hero />
        <ApplyView />
        <ScheduleView />
        <PrizeView />
        <DiscoverSuiView />
        <LocationView />
        <FaqView />
        <RulesView />
      </main>
      <Footer />
    </div>
  );
}
