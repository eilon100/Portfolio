import { motion } from 'framer-motion';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import Experience from './components/Experience';

const {
  Experience: { nameToDisplay, sectionId },
} = links;

function WorkExperience() {
  const { ref } = useSectionInView(nameToDisplay);
  return (
    <motion.section
     
      className="flex relative flex-col px-5 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >  
      <div ref={ref} id={sectionId}/>
      <SectionHeader>Experience</SectionHeader>
      <Experience />
    </motion.section>
  );
}

export default WorkExperience;
