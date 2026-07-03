import HeroSection from './components/HeroSection';
import MemoryPolaroids from './components/MemoryPolaroids';
import LetterContent from './components/LetterContent';
import Footer from './components/Footer';
import AntiGravityHearts from './components/AntiGravityHearts';
import AudioPlayer from './components/AudioPlayer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Floating Hearts Particle Background */}
      <AntiGravityHearts />

      {/* Minimalist Music Controller */}
      <AudioPlayer />

      {/* Content Layout sections */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Editorial Cover Intro */}
        <HeroSection />

        {/* Polaroid Memory Photo Showcase */}
        <MemoryPolaroids />

        {/* Personalized Letter Box */}
        <LetterContent />

        {/* Romantic Footer Details */}
        <Footer />
        
      </div>
    </main>
  );
}
