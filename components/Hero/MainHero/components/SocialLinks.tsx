import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialLinks() {
  return (
    <>
      <SocialIcon
        url="https://github.com/eilon100"
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/eilon-shamir/"
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.instagram.com/eilon_shamir/"
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://wa.link/tdo38m"
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
        network="whatsapp"
      />
    </>
  );
}

export default SocialLinks;
