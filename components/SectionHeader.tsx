import React from 'react';

function SectionHeader({ children }: { children: string }) {
  return (
    <h3 className="uppercase mt-20 mb-10 tracking-[20px] text-secondary text-2xl ">
      {children}
    </h3>
  );
}

export default SectionHeader;
