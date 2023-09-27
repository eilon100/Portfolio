import ParticlesComponent from './ParticlesComponent';
import { heroOptions } from './particlesOptions';

function HeroParticles() {
  return (
    <ParticlesComponent
      id="hero-particles"
      className="w-full z-0 min-h-[800px] absolute h-full"
      particlesOptions={heroOptions}
    />
  );
}

export default HeroParticles;
