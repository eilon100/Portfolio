import { motion } from "framer-motion";
import { FC } from "react";
import ExperienceCard from "./ExperienceCard";

const WorkExperience: FC = () => {
  return (
    <motion.div
      className="h-screen flex relative gap-10 md:justify-evenly md:gap-0 pt-[15vh] md:pt-0 overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className=" absolute top-[12%] uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex justify-center">
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
