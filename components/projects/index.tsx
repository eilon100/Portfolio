/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import WeatherImage from '/public/WeatherSite.png';
import ReplicazLogo from '/public/ReplicazLogo.png';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';

const projects = [
  {
    image: ReplicazLogo.src,
    title: '',
    technologyIcons: [
      'ts',
      'react',
      'next',
      'tailwind',
      'materialui',
      'express',
      'mongodb',
      'nodejs',
    ],
    paragraph:
      'Developed a social network web app to help people to afford buying expensive clothing and shoes for cheap. ',
    siteLink: 'https://replicaz.vercel.app/',
  },
  {
    image: WeatherImage.src,
    title: 'Weather Site',
    technologyIcons: ['js', 'scss', 'react', 'css', 'html'],
    paragraph:
      'In my free time, I developed a weather website that provides users with up-to-date weather information for any location.',
    siteLink: 'https://weather-site-gray.vercel.app/',
  },
];
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-main/80">
        {projects.map(
          ({ image, title, technologyIcons, paragraph, siteLink }, index) => (
            <div
              className="w-screen justify-evenly snap-start flex-shrink-0 flex flex-col items-center"
              key={index}
            >
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={image}
                alt="Image"
                className=" max-h-[400px] rounded-lg"
              />

              <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
                <div className="flex flex-col justify-center gap-2 md:gap-5">
                  <h4 className="text-3xl md:text-5xl font-semibold text-center">
                    {title}
                  </h4>
                  <div className="flex justify-center gap-3 md:gap-10">
                    {technologyIcons.map((icon) => {
                      return (
                        <img
                          key={icon}
                          className="h-7 sm:h-16 "
                          src={`https://skillicons.dev/icons?i=${icon}`}
                          alt="img"
                        />
                      );
                    })}
                  </div>
                </div>
                <p className="text-base md:text-lg !text-center md:text-left">
                  {paragraph}
                </p>
                <div className="w-full flex justify-center">
                  <a
                    target="_blank"
                    className=" bg-main py-2.5 rounded-lg px-6 "
                    href={siteLink}
                    rel="noreferrer"
                  >
                    Take me there
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="w-full absolute top-[30%] bg-main/10 left-0 h-[500px] -skew-y-12" />
    </motion.section>
  );
}

export default Projects;
