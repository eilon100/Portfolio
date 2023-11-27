import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import React from 'react';
import { SKILLS } from '../../utils/constants';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import Skill from './components/Skill';

const {
  Skills: { nameToDisplay, sectionId },
} = links;

function Skills() {
  const { ref } = useSectionInView(nameToDisplay);

  return (
    <motion.section
      ref={ref}
      id={sectionId}
      className="flex relative flex-col text-center justify-center  items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <SectionHeader> Skills</SectionHeader>
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-3 py-10">
        {SKILLS.map(({ name, icon }, index) => (
          <motion.div
            key={name}
            initial={{ x: index % 2 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 500, duration: 3 }}
          >
            <Skill name={name} icon={icon} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
