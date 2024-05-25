import Image from 'next/image';
import ImageLuc from '../../../public/images/97261512.jpg';

export default function AboutMe() {
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

        <p>CONTATOS</p>
        <p>Minha trajetória</p>
      </section>
    </section>
  );
}
