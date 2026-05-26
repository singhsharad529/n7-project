import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import SolutionsSection from './components/SolutionsSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <SolutionsSection />
      </main>
    </>
  );
}

export default App;
