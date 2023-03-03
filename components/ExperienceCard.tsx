/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FC } from "react";
import image from "../public/Qal-quote.svg";
const ExperienceCard: FC = () => {
  return (
    <article className="flex flex-col justify-center items-center p-6 py-10  md:py-20 md:mt-0  w-full  lg:max-w-[900px]  flex-shrink-0 rounded-sm md:bg-[#292929] overflow-hidden">
      <motion.img
        className="w-full h-20 sm:w-[500px] mb-5 md:mb-10 "
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={image.src}
        alt="Image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-light">Front end Developer</h4>
        <p className="uppercase py-5 text-gray-300 text-sm sm:text-base">
          03.2021 - Present
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
          <li>
            Designed and developed multiple web applications from scratch using
            various front-end and back-end technologies.
          </li>

          <li>
            Implemented responsive design principles to ensure optimal user
            experience across multiple devices and screen sizes.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
