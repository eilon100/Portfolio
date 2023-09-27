import { motion } from 'framer-motion';
import { links } from '../../../utils/data';

const {
  About: { sectionId },
} = links;

function HeroScroller() {
  return (
    <div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
    >
      <a href={`#${sectionId}`}>
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-main flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-main mb-1"
          />
        </div>
      </a>
    </div>
  );
}

export default HeroScroller;
