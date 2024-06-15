'use client';
import { useState } from 'react';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import MoreAboutMe from './Components/MoreAboutMe';
import Projects from './Components/Projects';
import { motion } from 'framer-motion';

export default function Home() {
  const [iAboutMe, setIAboutMe] = useState(false);
  const [iSkills, setISkills] = useState(true);
  const [iProjects, setIProjects] = useState(false);
  return (
    <main>
      <section className="backdrop-blur-md w-full h-full xl:w-window mx-auto rounded-lg shadow">
        <AboutMe />
        <motion.nav
          className="flex justify-center bg-sky-400/25 m-5 rounded-lg"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <button
            className="mx-3 my-2 hover:underline hover:decoration-solid"
            onClick={() => {
              setIAboutMe(false), setISkills(true), setIProjects(false);
            }}
          >
            <p className="text-slate-300">
              <strong>Habilidades</strong>
            </p>
          </button>
          <button
            className="mx-3 my-2 hover:underline hover:decoration-solid"
            onClick={() => {
              setIProjects(true), setIAboutMe(false), setISkills(false);
            }}
          >
            <p className="text-slate-300">
              <strong>Projetos</strong>
            </p>
          </button>
          <button
            className="mx-3 my-2 hover:underline hover:decoration-solid"
            onClick={() => {
              setIAboutMe(true), setISkills(false), setIProjects(false);
            }}
          >
            <p className="text-slate-300">
              <strong>Sobre Mim</strong>
            </p>
          </button>
        </motion.nav>
        {iSkills && <Skills />}
        {iAboutMe && <MoreAboutMe />}
        {iProjects && <Projects />}
      </section>
    </main>
  );
}
