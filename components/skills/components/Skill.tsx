import Image from 'next/image';
import React from 'react';

function Skill({ icon, name }: { icon: string; name: string }) {
  return (
    <div
      className="relative  bg-gray-700 flex justify-center items-center  rounded-full "
      key={name}
    >
      <Image src={icon} width={112} height={112} alt={name} className="p-4" />
    </div>
  );
}

export default Skill;
