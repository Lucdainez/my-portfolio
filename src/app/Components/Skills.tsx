'use client';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';
import { SiReact } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa6';
import { AiFillGithub } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { FaNode } from 'react-icons/fa';
import { TbBrandMysql } from 'react-icons/tb';
import { LiaDocker } from 'react-icons/lia';
import { TbBrandTypescript } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills() {
  const [isVisibleHTML, setIsVisibleHTML] = useState(false);
  const [isVisibleCSS3, setIsVisibleCSS3] = useState(false);
  const [isVisibleReact, setIsVisibleReact] = useState(false);
  const [isVisibleGit, setIsVisibleGit] = useState(false);
  const [isVisibleGH, setIsVisibleGH] = useState(false);
  const [isVisibleJs, setIsVisibleJs] = useState(false);
  const [isVisibleRedux, setIsVisibleRedux] = useState(false);
  const [isVisibleNode, setIsVisibleNode] = useState(false);
  const [isVisibleMS, setIsVisibleMS] = useState(false);
  const [isVisibleDocker, setIsVisibleDocker] = useState(false);
  const [isVisibleTS, setIsVisibleTS] = useState(false);

  return (
    <motion.section
      className="flex flex-col"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="flex flex-wrap justify-around w-full m-auto">
        <section className="flex flex-row overflow-x-auto  m-auto scrollbar">
          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleReact
                ? setIsVisibleReact(false)
                : setIsVisibleReact(true)
            }
          >
            <SiReact className="w-32 h-32 pr-1 m-auto" />
            {isVisibleReact && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>REACT</strong>
                </h6>
                <p className="text-center font-sans">
                  Biblioteca javascript usada para construir interface de
                  usuário
                </p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleHTML ? setIsVisibleHTML(false) : setIsVisibleHTML(true)
            }
          >
            <AiOutlineHtml5 className="w-32 h-32 pr-1 m-auto" />
            {isVisibleHTML && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>HTML5</strong>
                </h6>
                <p className="text-center font-sans">
                  Linguagem de marcação textual para criar a estrutura das
                  páginas
                </p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleCSS3 ? setIsVisibleCSS3(false) : setIsVisibleCSS3(true)
            }
          >
            <TbBrandCss3 className="w-32 h-32 pr-1 m-auto" />
            {isVisibleCSS3 && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>CSS3</strong>
                </h6>
                <p className="text-center font-sans">
                  linguagem de estilo para elementos HTML
                </p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleGit ? setIsVisibleGit(false) : setIsVisibleGit(true)
            }
          >
            <FaGitAlt className="w-32 h-32 pr-1 m-auto" />
            {isVisibleGit && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>GIT</strong>
                </h6>
                <p className="text-center font-sans">
                  Sistema de controle para histórico de alterações em arquivos e
                  projetos
                </p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleGH ? setIsVisibleGH(false) : setIsVisibleGH(true)
            }
          >
            <AiFillGithub className="w-32 h-32 pr-1 m-auto" />
            {isVisibleGH && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>GITHUB</strong>
                </h6>
                <p className="text-center font-sans">
                  Plataforma de hospedagem de código-fonte e arquivos
                </p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleJs ? setIsVisibleJs(false) : setIsVisibleJs(true)
            }
          >
            <SiJavascript className="w-32 h-32 pr-1 m-auto" />
            {isVisibleJs && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>JAVASCRIPT</strong>
                </h6>
                <p className="text-center font-sans">
                  Linguagem de programação com script em alto nível
                </p>
              </motion.aside>
            )}
          </motion.div>
        </section>

        <section className="flex flex-row overflow-x-auto m-auto scrollbar mb-5">
          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleRedux
                ? setIsVisibleRedux(false)
                : setIsVisibleRedux(true)
            }
          >
            <TbBrandRedux className="w-32 h-32 pr-1 m-auto" />
            {isVisibleRedux && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>REDUX</strong>
                </h6>
                <p className="text-center font-sans">
                  Biblioteca para armazenamento de estados
                </p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleNode ? setIsVisibleNode(false) : setIsVisibleNode(true)
            }
          >
            <FaNode className="w-32 h-32 pr-1 m-auto" />
            {isVisibleNode && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>NODE</strong>
                </h6>
                <p className="text-center font-sans">Ambiente de execução JavaScript</p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleMS ? setIsVisibleMS(false) : setIsVisibleMS(true)
            }
          >
            <TbBrandMysql className="w-32 h-32 pr-1 m-auto" />
            {isVisibleMS && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>MYSQL</strong>
                </h6>
                <p className="text-center font-sans">Banco de dados popular e poderoso</p>
              </motion.aside>
            )}
          </motion.div>
          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleDocker
                ? setIsVisibleDocker(false)
                : setIsVisibleDocker(true)
            }
          >
            <LiaDocker className="w-32 h-32 pr-1 m-auto" />
            {isVisibleDocker && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>DOCKER</strong>
                </h6>
                <p className="text-center font-sans">
                  Tecnologia de conteinerização open source
                </p>
              </motion.aside>
            )}
          </motion.div>

          <motion.div
            className="flex justify-between px-10 m-5 rounded-lg bg-sky-400/25 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              isVisibleTS ? setIsVisibleTS(false) : setIsVisibleTS(true)
            }
          >
            <TbBrandTypescript className="w-32 h-32 pr-1 m-auto" />
            {isVisibleTS && (
              <motion.aside
                className="flex flex-col justify-center w-32"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h6 className="text-center pb-1">
                  <strong>TYPESCRIPT</strong>
                </h6>
                <p className="text-center font-sans">Superconjunto de JavaScript</p>
              </motion.aside>
            )}
          </motion.div>
        </section>
      </section>
    </motion.section>
  );
}
