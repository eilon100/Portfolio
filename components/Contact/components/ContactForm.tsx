import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;

function ContactForm() {
  const form = useRef<any>();
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
        () => {
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
    <form
      className="flex flex-col justify-around space-y-2 w-full max-w-2xl mx-auto "
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
        className="contactInput h-full"
        placeholder="Message"
        name="message"
        required
      />
      <button
        className="bg-main hover:bg-main/90 py-3 px-10 rounded-md font-bold text-lg"
        type="submit"
        disabled={disableButton}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
