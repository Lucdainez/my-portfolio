import { motion } from 'framer-motion';

export default function MoreAboutMe() {
  return (
    <motion.section
      className="flex flex-col self-center w-80 mt-5 m-auto pt-5 pb-10 text-center"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
    >
      <p>Lucas de Sousa Dainez Silva</p>
      <p>Casado</p>
      <p>21/08/2001</p>
      <p>Brasilia/DF</p>
      <p>Universitário</p>
      <br />
      <p className="mb-2">2019 {`=>`} Formatura Ensino-médio </p>
      <p className="mb-2">
        2022 - 2023 {`=>`} Curso de Desenvolvimento Web Full Stack da Trybe
      </p>

      <p>2024 - 2028 {`=>`} Faculdade de Engenharia de Software na IESB</p>
    </motion.section>
  );
}
