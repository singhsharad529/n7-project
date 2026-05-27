import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import SolutionsSection from './components/SolutionsSection';
import './App.css';
import BankingSection from './components/BankingSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <SolutionsSection />
        <BankingSection />
      </main>
    </>
  );
}

export default App;
