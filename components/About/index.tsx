import { motion } from 'framer-motion';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import ServiceCard from './components/ServiceCard';
import img from '/public/profileImage.jpeg';

const services = [
  {
    title: 'Frontend Developer',
    icon: '/frontend.png',
  },
  {
    title: 'Backend Developer',
    icon: '/backend.png',
  },
  {
    title: 'UI/UX Design',
    icon: '/ux.png',
  },
];
const {
  About: { nameToDisplay, sectionId },
} = links;

function About() {
  const { ref } = useSectionInView(nameToDisplay);

  return (
    <motion.section
      ref={ref}
      id={sectionId}
      className="flex flex-col mb-28 w-full justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
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
          <div className="flex flex-col gap-10">
            <h4 className="text-4xl font-semibold">
              Here is a{' '}
              <span className="underline decoration-main/50">little</span>{' '}
              background:
            </h4>
            <p className="text-base">
              Hello there, I'm Eilon. I'm a skilled software developer with a
              passion for creating innovative and user-friendly solutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full justify-center items-center">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
