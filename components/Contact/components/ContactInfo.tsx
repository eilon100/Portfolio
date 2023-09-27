import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CONTACT_INFO = [
  {
    icon: <PhoneIcon />,
    text: '054-282-2219',
  },
  {
    icon: <EnvelopeIcon />,
    text: 'eilonshamir123@gmail.com',
  },
  {
    icon: <MapPinIcon />,
    text: 'Rosh HaAyin, Israel',
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 items-center text-center md:text-left md:items-start">
      <h4 className="text-4xl font-semibold">
        Let&apos;s <span className="decoration-main/50 underline">Connect</span>
      </h4>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="space-y-5 md:space-y-10 items-center md:items-start flex flex-col py-2">
        {CONTACT_INFO.map(({ text, icon }) => (
          <div
            key={text}
            className="flex items-center space-x-2 justify-center"
          >
            <div className="text-main h-6 w-6 animate-pulse">{icon}</div>
            <p className="text-xl md:text-2xl">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
