import { motion } from 'framer-motion';

export default function MoreAboutMe() {
  return (
    <motion.section
      className="flex flex-col self-center w-96 mt-5"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center">sociável, focado, descontraído</p>
      <br />
      <p className="text-center w-6/12 m-auto">
        2022 - Curso de Desenvolvimento Web Full Stack da Trybe
      </p>
      <div className="h-3 border-r-2 border-solid border-rose-500 m-auto"></div>
      <p className="text-center w-6/12 m-auto">
        2023 - Conclusão do Curso de Desenvolvimento Web Full Stack da Trybe
      </p>
      <div className="h-3 border-r-2 border-solid border-rose-500 m-auto"></div>
      <p className="text-center w-6/12 m-auto">
        2024 - Faculdade de Engenharia de Software na IESB
      </p>
    </motion.section>
  );
}
