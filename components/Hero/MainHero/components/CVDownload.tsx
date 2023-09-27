import Router from 'next/router';
import React from 'react';
import { TbFileDownload } from 'react-icons/tb';
import { links } from '../../../../utils/data';
const {
  Contact: { sectionId },
} = links;

function CVDownload() {
  return (
    <div>
      <a className="flex items-center gap-2" href="/Resume.pdf" download>
        <TbFileDownload className="text-2xl text-secondary" />
        <p className="uppercase inline-flex text-sm text-gray-400">
          Download CV
        </p>
      </a>
      <div
        onClick={() => {
          Router.push(`#${sectionId}`);
        }}
      ></div>
    </div>
  );
}

export default CVDownload;
