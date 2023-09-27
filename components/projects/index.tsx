import { motion } from 'framer-motion';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import Project from './components/Project';
import { PROJECTS } from '../../utils/constants';
import ScrollIndicator from './components/ScrollIndicator';
import { useInView } from 'react-intersection-observer';

const {
  Projects: { nameToDisplay, sectionId },
} = links;

function Projects() {
  const { ref } = useSectionInView(nameToDisplay);
  const { ref: elementRef, inView } = useInView({ threshold: 0.5 });

  return (
    <motion.section
      ref={ref}
      id={sectionId}
      className="relative flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <SectionHeader>Projects</SectionHeader>
      {!inView && <ScrollIndicator />}
      <div className="max-w-7xl w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-proximity z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-main/80">
        {PROJECTS.map((project, index) => (
          <div
            className="flex-shrink-0 w-full"
            key={index}
            ref={index === PROJECTS.length - 1 ? elementRef : null}
          >
            <Project {...project} />
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-main/10 left-0 h-[500px] -skew-y-12" />
    </motion.section>
  );
}

export default Projects;
