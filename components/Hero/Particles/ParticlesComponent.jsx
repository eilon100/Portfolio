import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function ParticlesComponent({ particlesOptions, className, id }) {
  let isInitialized = false;

  const particlesInit = useCallback(async (engine) => {
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
}

export default ParticlesComponent;
