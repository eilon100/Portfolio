import { FC } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Router from "next/router";

const Header: FC = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
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
          url="https://wa.me/0542822219"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="whatsapp"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        onClick={() => {
          Router.push("#contact");
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
