'use client';
import Image from 'next/image';
import ImageLuc from '../../../public/images/97261512.jpg';
import { MdOutlineMail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <motion.section
      className="flex justify-center mx-auto"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="flex flex-col justify-center items-center content-center p-1.5 m-auto rounded-lg mt-5">
        <Image
          src={ImageLuc}
          className="rounded h-64 w-64 mt-5"
          alt="retrato do Lucas"
        />
        <h1 className="text-center my-5">
          <strong>Olá, meu nome é Lucas!</strong>
        </h1>
        <p>
          <strong>Sou Desenvolvedor Back-End</strong>
        </p>
        <aside className="flex flex-row self-center mt-5 h-min w-28 m-auto">
          <motion.button
            className="self-center m-auto rounded-lg shadow bg-sky-400/25 hover:bg-back h-8 w-8"
            whileHover={{ scale: 1.2 }}
          >
            <a
              href="mailto:lucdainez@gmail.com"
              target="_blank"
              className="flex"
            >
              <MdOutlineMail className="h-5 w-5 m-auto" />
            </a>
          </motion.button>
          <motion.button
            className="self-center m-auto rounded-lg shadow bg-sky-400/25 hover:bg-back h-8 w-8"
            whileHover={{ scale: 1.2 }}
          >
            <a
              href="https://www.linkedin.com/in/lucas-dainez/"
              target="_blank"
              className="flex"
            >
              <CiLinkedin className="h-5 w-5 m-auto" />
            </a>
          </motion.button>
          <motion.button
            className="self-center m-auto rounded-lg shadow bg-sky-400/25 hover:bg-back h-8 w-8"
            whileHover={{ scale: 1.2 }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=5561991003443"
              target="_blank"
              className="flex"
            >
              <FaWhatsapp className="h-5 w-5 m-auto" />
            </a>
          </motion.button>
        </aside>
      </section>
    </motion.section>
  );
}
