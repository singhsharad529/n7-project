import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import SolutionsSection from './components/SolutionsSection';
import './App.css';
import BankingSection from './components/BankingSection';
import DigitalSection from './components/DigitalSection';
import Insights from './components/Insights';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <SolutionsSection />
        <BankingSection />
        <DigitalSection />
        <Insights />
      </main>
    </>
  );
}

export default App;
