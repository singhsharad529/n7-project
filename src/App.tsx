import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import SolutionsSection from './components/SolutionsSection';
import './App.css';
import BankingSection from './components/BankingSection';
import DigitalSection from './components/DigitalSection';
import Insights from './components/Insights';
import Footer from './components/Footer';
import HelloStrip from './components/HelloStrip';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <SolutionsSection />
        <BankingSection />
        <HelloStrip />
        <DigitalSection />
        <Insights />
        <Footer />
      </main>
    </>
  );
}

export default App;
