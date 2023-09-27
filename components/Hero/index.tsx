import HeroParticles from './Particles/HeroParticles';
import MainHero from './MainHero';
import HeroScroller from './HeroScroller';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';

const {
  Home: { nameToDisplay, sectionId },
} = links;

function Hero() {
  const { ref } = useSectionInView(nameToDisplay);

  return (
    <section
      ref={ref}
      id={sectionId}
      className="h-screen flex flex-col items-center justify-center text-center relative"
    >
      <MainHero />
      <HeroParticles />
      <HeroScroller />
    </section>
  );
}

export default Hero;
