import { motion } from 'framer-motion';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import BallCanvas from './components/Ball';

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

const d = ['express', 'materialui', 'github'];
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
      transition={{ duration: 1.5 }}
    >
      <SectionHeader> Skills</SectionHeader>
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-7xl">
        {skillsInfo.map(({ name, icon }) => (
          <div className="w-28 h-28" key={name}>
            <BallCanvas icon={icon} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
