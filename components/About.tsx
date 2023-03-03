import { motion } from "framer-motion";
import { FC } from "react";
import img from "../public/profileImage.jpeg";
const About: FC = () => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        className="-mb-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        src={img.src}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        alt="Image"
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-main/50">little</span>{" "}
          background:
        </h4>
        <p className="text-base">
          Hello there, I'm Eilon. I'm a skilled software developer with a
          passion for creating innovative and user-friendly solutions.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
