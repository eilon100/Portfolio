import { useRef, useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

const {
  Contact: { nameToDisplay, sectionId },
} = links;

function ContactMe() {
  const { ref } = useSectionInView(nameToDisplay);

  return (
    <section
      ref={ref}
      id={sectionId}
      className="w-full relative  mb-32 flex flex-col text-center px-10  items-center"
    >
      <SectionHeader>Contact</SectionHeader>
      <div className="grid md:grid-cols-2 md:py-12 gap-4 relative w-full max-w-7xl">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactMe;
