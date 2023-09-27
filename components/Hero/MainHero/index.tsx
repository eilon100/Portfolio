import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import CVDownload from './components/CVDownload';
import SocialLinks from './components/SocialLinks';

function MainHero() {
  const [text, _count] = useTypewriter({
    words: ['Hello, My name is Eilon', "I'm a Full Stack Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="z-20 w-full">
      <Image
        className=" rounded-full w-40 h-40 mx-auto object-cover mb-3"
        src="/profileImage.jpeg"
        width={128}
        height={128}
        alt="Avatar"
        unoptimized
        priority
      />
      <h2 className="text-sm uppercase text-secondary pb-2 tracking-[15px]">
        Software Developer
      </h2>
      <h1 className="text-2xl lg:text-6xl font-semibold px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="main" />
      </h1>
      <div className="flex gap-5 flex-col justify-center items-center">
        <div className="pt-5 flex gap-2 sm:gap-5">
          <SocialLinks />
        </div>
        <CVDownload />
      </div>
    </div>
  );
}

export default MainHero;
