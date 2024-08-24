import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-200">
      <header className="relative w-full max-w-md bg-blue-300 ">
        <div className="bg-blue-200 h-10" />
        <div className="relative text-center text-white">
          <Image
            src="/images/casal.jpeg"
            alt="Jonatas e Milena sentados no banco"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-t-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">
              Jonatas & Milena
            </h1>
            <p className="text-lg text-white drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </header>

      <main className="bg-white w-full max-w-md p-6 rounded-b-lg shadow-lg text-center flex-1">
        <div className="space-y-4">
          <a
            href="#"
            className="block w-full bg-pink-300 text-black py-4 rounded-lg text-lg font-semibold hover:bg-pink-400 transition duration-300"
          >
            Lista de Presentes - Convidados
          </a>
          <a
            href="#"
            className="block w-full bg-pink-300 text-black py-4 rounded-lg text-lg font-semibold hover:bg-pink-400 transition duration-300"
          >
            Lista de Presentes - Padrinhos
          </a>
        </div>
      </main >
    </div >
  );
}
