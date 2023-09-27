import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { RxDotFilled } from 'react-icons/rx';
import { cn } from '../../../utils/cn';
import { Project, ProjectStatus } from '../../../types/project';

const statusColors: { [key in ProjectStatus]: string } = {
  live: 'text-blue-600',
  development: 'text-orange-600',
  updating: 'text-green-500',
};

function Project({
  image,
  title,
  technologyIcons,
  paragraph,
  siteLink,
  status,
}: Project) {
  const isInDev = status === 'development';
  return (
    <div className="w-full p-10 justify-evenly snap-start flex-shrink-0 flex flex-col items-center">
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={image}
        alt="Image"
        className="w-full max-w-xl object-contain aspect-video"
      />

      <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
        <div className="flex flex-col justify-center gap-2 md:gap-10">
          <div className="mt-3 md:mt-8 text-center flex flex-col gap-2">
            <h4 className="text-3xl md:text-5xl font-semibold ">{title}</h4>
            <h1 className="flex justify-center items-center uppercase text-xl">
              {status}
              <RxDotFilled
                className={cn(
                  `${statusColors[status]} text-4xl animate-pulse mt-[2px]`
                )}
              />
            </h1>
          </div>

          <div className="flex justify-center gap-3 md:gap-10">
            {technologyIcons.map((icon) => (
              <img
                key={icon}
                className="h-7 sm:h-16"
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt="img"
              />
            ))}
          </div>
        </div>
        <p className="text-base md:text-lg !text-center md:text-left">
          {paragraph}
        </p>
        {!isInDev && (
          <div className="w-full flex justify-center">
            <a
              target="_blank"
              className=" bg-main hover:bg-main/90 transition-all py-2.5 rounded-lg px-6 "
              href={siteLink}
              rel="noreferrer"
            >
              Take me there
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
