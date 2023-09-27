/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import Project from './components/Project';
import { PROJECTS } from '../../utils/constants';

const {
  Projects: { nameToDisplay, sectionId },
} = links;

function Projects() {
  const { ref } = useSectionInView(nameToDisplay);

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
      <div className="max-w-7xl w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-proximity z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-main/80">
        {PROJECTS.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-main/10 left-0 h-[500px] -skew-y-12" />
    </motion.section>
  );
}

export default Projects;
