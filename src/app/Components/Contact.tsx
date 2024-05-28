import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.aside
      className="flex m-auto w-32 p-3 mb-3"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.3 }}
      transition={{ duration: 0.5 }}
    >
      <button className="self-center m-auto">
        <a
          href="https://is.gd/link_email_lucas"
          target="_blank"
          className="flex"
        >
          <MdOutlineMail />
        </a>
      </button>
      <button className="self-center m-auto">
        <a
          href="https://www.linkedin.com/in/lucas-dainez/"
          target="_blank"
          className="flex"
        >
          <CiLinkedin />
        </a>
      </button>
      <button className="self-center m-auto">
        <a
          href="https://api.whatsapp.com/send?phone=5561991003443"
          target="_blank"
          className="flex"
        >
          <FaWhatsapp />
        </a>
      </button>
    </motion.aside>
  );
}
