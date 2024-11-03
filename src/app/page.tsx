import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="relative w-full max-w-md bg-blue-300">
        <div className="h-10 bg-blue-200" />
        <div className="relative text-center text-white">
          <Image
            src="/images/casal.jpeg"
            alt="Jonatas e Milena sentados no banco"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="absolute inset-0 rounded-t-lg bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">
              Jonatas & Milena
            </h1>
            <p className="text-lg text-white drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </header>

      <main className="w-full max-w-md flex-1 rounded-b-lg bg-white p-6 text-center shadow-lg">
        <div className="space-y-4">
          <a
            href="#"
            className="block w-full rounded-lg bg-pink-300 py-4 text-lg font-semibold text-black transition duration-300 hover:bg-pink-400"
          >
            Lista de Presentes - Convidados
          </a>
          <a
            href="#"
            className="block w-full rounded-lg bg-pink-300 py-4 text-lg font-semibold text-black transition duration-300 hover:bg-pink-400"
          >
            Lista de Presentes - Padrinhos
          </a>
        </div>
      </main>
    </>
  );
}
