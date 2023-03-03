import { motion } from "framer-motion";
import { FC } from "react";
import Skill from "./Skill";
export const skillsInfo = [
  "js",
  "typescript",
  "html",
  "css",
  "scss",
  "react",
  "tailwind",
  "nextjs",
  "nodejs",
  "express",
  "mongodb",
  "redux",
  "materialui",
  "figma",
  "github",
  "git",
];

const Skills: FC = () => {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skillsInfo.map((skill, index) => {
          const firstHalf = skillsInfo.length / 2;
          const direction = index < firstHalf ? true : false;
          return <Skill directionLeft={direction} key={skill} name={skill} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
