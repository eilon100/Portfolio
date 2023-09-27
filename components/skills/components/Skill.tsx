import Image from 'next/image';
import React from 'react';

function Skill({ icon, name }: { icon: string; name: string }) {
  return (
    <div
      className="relative w-28 h-28 bg-gray-700 flex justify-center items-center  rounded-full "
      key={name}
    >
      <Image src={icon} fill alt={name} className="p-4" />
    </div>
  );
}

export default Skill;
