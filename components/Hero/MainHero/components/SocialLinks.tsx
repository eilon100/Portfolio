import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { SOCIAL_LINKS } from '../../../../utils/constants';

const { gitHub, linkedin, instagram, whatsapp } = SOCIAL_LINKS;

function SocialLinks() {
  return (
    <>
      <SocialIcon
        url={gitHub}
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url={linkedin}
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url={instagram}
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url={whatsapp}
        target="_blank"
        fgColor="gray"
        bgColor="transparent"
        network="whatsapp"
      />
    </>
  );
}

export default SocialLinks;
