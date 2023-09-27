import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function ServiceCard({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      transition={{
        delay: 0.5 * index,
        duration: 0.75,
        ease: 'easeOut',
      }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className=" w-full md:w-1/3 bg-gradient-to-r from-gray-100 to-gray-400 p-[1px] rounded-[20px] shadow-xl"
    >
      <div className="bg-[#333333] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="relative h-16 w-16">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>
        <h3 className="text-[#9999a1] text-lg font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
