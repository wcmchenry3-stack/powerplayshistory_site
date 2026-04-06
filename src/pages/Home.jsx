import { HeroSection } from '../components/home/HeroSection.jsx';
import { FeaturedDossiers } from '../components/home/FeaturedDossiers.jsx';
import { PhilosophySection } from '../components/home/PhilosophySection.jsx';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-20">
      <HeroSection />
      <FeaturedDossiers />
      <PhilosophySection />
    </main>
  );
}
