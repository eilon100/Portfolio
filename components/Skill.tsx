import { motion } from "framer-motion";
import { FC } from "react";

interface IProps {
  directionLeft?: boolean;
  name?: string;
}

const Skill: FC<IProps> = ({ directionLeft, name }) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={`https://skillicons.dev/icons?i=${name}`}
        alt={name}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full ">
          <p className="text-xs sm:text-lg md:text-xl font-semibold capitalize text-black opacity-100">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
