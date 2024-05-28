'use client';
import Image from 'next/image';
import ImageLuc from '../../../public/images/97261512.jpg';
import { useState } from 'react';
import Contact from './Contact';
import MoreAboutMe from './MoreAboutMe';

export default function AboutMe() {
  const [contact, setContact] = useState(false);
  const [moreAboutMe, setMoreAboutMe] = useState(false);

  const clickContact = () => {
    if (contact === false) {
      setContact(true);
    } else {
      setContact(false);
    }
  };

  const clickMoreAboutMe = () => {
    if (moreAboutMe === false) {
      setMoreAboutMe(true);
    } else {
      setMoreAboutMe(false);
    }
  };

  return (
    <section className="flex">
      <section className="flex-auto">
        <Image
          src={ImageLuc}
          className="rounded h-64 w-64 ml-5 mt-5"
          alt="retrato do Lucas"
        />
      </section>
      <section className="flex-auto justify-center items-center content-center p-1.5 mr-16 rounded-lg bg-back mt-5">
        <h2 className="text-center">
          <strong>Olá, meu nome é Lucas! Sou Desenvolvedor full-Stack!</strong>
        </h2>
        <p className="text-center">
          <strong>Tenho 22 anos</strong>
        </p>
        <div className="flex flex-col self-center mt-10 h-min w-28 m-auto">
          <button
            className="bg-sky-400/25 hover:bg-sky-400/50 text-slate-300 font-bold shadow-md shadow-sky-400/25 hover:shadow-sky-400/100 py-1 px-1 mb-5 rounded"
            onClick={clickContact}
          >
            <p>CONTATOS</p>
          </button>
          {contact && <Contact />}
          <button
            className="bg-sky-400/25 hover:bg-sky-400/50 text-slate-300 font-bold shadow-md shadow-sky-400/25 hover:shadow-sky-400/100 py-1 px-1 rounded"
            onClick={clickMoreAboutMe}
          >
            <p>MAIS SOBRE MIM</p>
          </button>
          {moreAboutMe && <MoreAboutMe />}
        </div>
      </section>
    </section>
  );
}
