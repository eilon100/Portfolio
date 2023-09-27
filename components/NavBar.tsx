import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '../utils/cn';
import { links } from '../utils/data';
import { useActiveSectionContext } from '../context/active-section-context';

function NavBar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <nav className="flex px-4 xs:px-10 justify-center items-center fixed w-full max-w-[60rem] left-1/2 -translate-x-1/2 top-[1.7rem]">
        <ul className="flex items-center w-full justify-between gap-y-1 xs:gap-y-2 text-[0.65rem] xs:text-[0.8rem] sm:text-[1rem] font-medium text-secondary ">
          {Object.values(links).map(({ nameToDisplay, sectionId }) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={sectionId}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={cn(
                  'flex w-full items-center justify-center px-2 py-1 sm:py-2 sm:px-3 transition text-secondary hover:text-gray-300',
                  {
                    ' text-gray-200': activeSection === nameToDisplay,
                  }
                )}
                href={`#${sectionId}`}
                onClick={() => {
                  setActiveSection(nameToDisplay);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {nameToDisplay}

                {nameToDisplay === activeSection && (
                  <motion.span
                    className="rounded-full absolute inset-0 -z-10 bg-zinc-900"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
