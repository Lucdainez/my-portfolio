'use client';
import { useState } from 'react';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import MoreAboutMe from './Components/MoreAboutMe';

export default function Home() {
  const [iAboutMe, setIAboutMe] = useState(false);
  const [iSkills, setISkills] = useState(true);
  return (
    <main>
      <section className="backdrop-blur-md w-full mx-auto rounded-lg shadow">
        <AboutMe />
        <nav className="flex justify-center bg-sky-400/25 m-5 rounded-lg">
          <button
            className="mx-3 my-2 hover:underline hover:decoration-solid"
            onClick={() => {
              setIAboutMe(false), setISkills(true);
            }}
          >
            <p className="text-slate-300">
              <strong>Habilidades</strong>
            </p>
          </button>
          <button className="mx-3 my-2 hover:underline hover:decoration-solid">
            <p className="text-slate-300">
              <strong>Projetos</strong>
            </p>
          </button>
          <button
            className="mx-3 my-2 hover:underline hover:decoration-solid"
            onClick={() => {
              setIAboutMe(true), setISkills(false);
            }}
          >
            <p className="text-slate-300">
              <strong>Sobre Mim</strong>
            </p>
          </button>
        </nav>
        {iSkills && <Skills />}
        {iAboutMe && <MoreAboutMe />}
      </section>
    </main>
  );
}
