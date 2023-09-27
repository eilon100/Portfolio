import { useRef, useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import { links } from '../../utils/data';
import { useSectionInView } from '../../utils/hooks/useSectionInView';
import SectionHeader from '../SectionHeader';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
const {
  Contact: { nameToDisplay, sectionId },
} = links;

function ContactMe() {
  const { ref } = useSectionInView(nameToDisplay);
  const form: any = useRef();
  const [disableButton, setDisableButton] = useState(false);
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    e.preventDefault();
    setDisableButton(true);
    emailjs
      .sendForm(
        SERVICE_ID,
        'template_b777vi7',
        form.current,
        'dRii3LyW1kBLp__Ny'
      )
      .then(
        (result) => {
          setDisableButton(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);

          setDisableButton(false);
        }
      );
  };

  return (
    <section
      ref={ref}
      id={sectionId}
      className=" w-full relative gap-10 mb-32 flex flex-col text-center px-10  items-center"
    >
      <SectionHeader> Contact</SectionHeader>
      <div className="flex flex-col space-y-5 md:space-y-10 w-full">
        <h4 className="hidden sm:inline text-2xl md:text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="decoration-main/50 underline">Lets Talk</span>
        </h4>
        <div className=" space-y-5 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-main h-7	w-7	animate-pulse" />
            <p className="text-xl md:text-2xl">054-282-2219</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-main h-7	w-7	animate-pulse" />
            <p className="text-xl md:text-2xl">eilonshamir123@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-main h-	w-7	animate-pulse" />
            <p className="text-xl md:text-2xl">Rosh HaAyin, Israel</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-full max-w-2xl mx-auto "
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="flex space-x-2 w-full">
            <input
              className="contactInput w-1/2"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="contactInput w-1/2"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <input
            className="contactInput"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            name="message"
            required
          />
          <button
            className="bg-main py-3 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
            disabled={disableButton}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
