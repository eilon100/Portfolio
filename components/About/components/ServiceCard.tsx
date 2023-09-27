import React from 'react';
import Image from 'next/image';

function ServiceCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="bg-[#333333] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <Image
        src={icon}
        alt={title}
        height={64}
        width={64}
        className="object-contain"
      />
      <h3 className="text-[#9999a1] text-lg font-bold text-center">{title}</h3>
    </div>
  );
}

export default ServiceCard;
