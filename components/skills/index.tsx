import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import Skill from './components/Skill';

const BallCanvas = dynamic(() => import('./components/Ball'), {
  ssr: false,
});

export const skillsInfo = [
  { name: 'js', icon: '/tech/javascript.png' },
  { name: 'typescript', icon: '/tech/typescript.png' },
  { name: 'html', icon: '/tech/html.png' },
  { name: 'css', icon: '/tech/css.png' },
  { name: 'react', icon: '/tech/reactjs.png' },
  { name: 'tailwind', icon: '/tech/tailwind.png' },
  { name: 'figma', icon: '/tech/figma.png' },
  { name: 'nodejs', icon: '/tech/nodejs.png' },
  { name: 'redux', icon: '/tech/redux.png' },
  { name: 'git', icon: '/tech/git.png' },
  { name: 'mongodb', icon: '/tech/mongodb.png' },
  { name: 'docker', icon: '/tech/docker.png' },
  { name: 'scss', icon: '/tech/scss.png' },
  { name: 'nextjs', icon: '/tech/nextjs.png' },
  { name: 'socketio', icon: '/tech/socketio.png' },
  { name: 'materialui', icon: '/tech/materialui.png' },
];

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
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-7xl">
        {skillsInfo.map(({ name, icon }) => (
          <Skill name={name} icon={icon} key={name} />
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
