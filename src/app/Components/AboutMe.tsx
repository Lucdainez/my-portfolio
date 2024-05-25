'use client';
import Image from 'next/image';
import ImageLuc from '../../../public/images/97261512.jpg';
import { useState } from 'react';
import Contact from './Contact';

export default function AboutMe() {
  const [contact, setContact] = useState(false);

  const clickContact = () => {
    if (contact === false) {
      setContact(true)
    } else {
      setContact(false)
    }
  }

  return (
    <section className="flex">
      <section className="flex-auto border-2 border-solid rounded border-rose-500">
        <Image
          src={ImageLuc}
          className="rounded opacity-100 h-64 w-64 ml-5 mt-5"
          alt="retrato do Lucas"
        />
      </section>
      <section className="flex-auto justify-center items-center content-center p-1.5 border-2 border-solid rounded border-rose-500">
        <h2 className="text-center">
          Olá, meu nome é Lucas! Sou Desenvolvedor full-Stack.
        </h2>
        <p className="text-center">Tenho 22 anos</p>
        <div className="flex flex-col justify-center mt-24">
          <button onClick={clickContact}>
            <p>CONTATOS</p>
          </button>
          {contact && <Contact/>}
          <button>
            <p>Minha trajetória</p>
          </button>
        </div>
      </section>
      
    </section>
  );
}
