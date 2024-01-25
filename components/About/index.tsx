import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ABOUT_PARAGRAPH, ABOUT_SKILLS } from '../../utils/constants';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import ServiceCard from './components/ServiceCard';
import img from '/public/aboutImage.jpeg';

const {
  About: { nameToDisplay, sectionId },
} = links;

function About() {
  const { ref } = useSectionInView(nameToDisplay);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={ref}
      id={sectionId}
      className="flex flex-col mb-28 w-full justify-center items-center"
    >
      <SectionHeader>About</SectionHeader>
      <div className="flex  xl:h-[40rem] flex-col gap-10 text-center xl:text-left xl:flex-row px-10 items-center">
        <motion.img
          className="w-full max-w-sm h-full xl:max-w-fit object-cover rounded-lg"
          src={img.src}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          alt="Image"
        />
        <div className="space-y-10 px-0 md:px-10 flex flex-col justify-around h-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col gap-10"
          >
            <h4 className="text-4xl font-semibold">
              Here is a{' '}
              <span className="underline decoration-main/50">little</span>{' '}
              background
            </h4>
            <div className="text-base leading-relaxed">{ABOUT_PARAGRAPH}</div>
          </motion.div>
          <div
            ref={sectionRef}
            className="flex flex-col md:flex-row gap-5 w-full justify-center items-center"
          >
            {ABOUT_SKILLS.map(({ title, icon }, index) => (
              <motion.div
                key={title}
                initial={{ x: -100, opacity: 0 }}
                transition={{
                  delay: 0.4 * index,
                  duration: 0.75,
                  ease: 'easeOut',
                }}
                animate={isInView && { x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className=" w-full md:w-1/3 bg-gradient-to-r from-gray-100 to-gray-400 p-[1px] rounded-[20px] shadow-xl"
              >
                <ServiceCard title={title} icon={icon} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
