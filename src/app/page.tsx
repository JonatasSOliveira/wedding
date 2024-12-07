import Image from 'next/image'
import Link from 'next/link'
import { guestProductListDefinition } from './product-lists/guest/page-definition'
import { groomsmanProductListDefinition } from './product-lists/groomsman/page-definition'
import { signInPageDefinition } from './auth/sign-in/page-definition'
import React from 'react'

const WelcomeBannerComponnet: React.FC = () => (
  <>
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
  </>
)

const LocationComponent: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4 bg-secondary-pastelPink p-4">
    <h2 className="text-2xl font-bold text-primary-blue">Quando e onde?</h2>
    <h3 className="text-xl font-bold text-secondary-darkBlue">Data</h3>
    <p>08 de Março de 2025</p>
    <p>Sábado, às 17:00</p>
    <h3 className="text-xl font-bold text-secondary-darkBlue">Local</h3>
    <p>Monumentalle, Estação de Eventos</p>
    <p>BR 376 - km 110. Distrito Industrial Sumaré. Paranavaí-PR.</p>
    <iframe
      className="h-[300px] w-[100%]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.482340727818!2d-52.41157312390523!3d-23.082862644188904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94929570f9b87a3d%3A0xe92b0570edc0b006!2sMonumentalle!5e1!3m2!1spt-BR!2sbr!4v1733600642841!5m2!1spt-BR!2sbr"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
)

const GiftListComponent: React.FC = () => (
  <div className="space-y-4 bg-neutral-lightGray p-4">
    <h2 className="text-2xl font-bold">Lista de presentes</h2>
    <Link
      href={guestProductListDefinition.path}
      className="block w-full rounded-lg bg-primary-pink py-4 text-lg font-semibold text-black transition duration-300 hover:bg-pink-400"
    >
      {guestProductListDefinition.title}
    </Link>
    <Link
      href={groomsmanProductListDefinition.path}
      className="block w-full rounded-lg bg-primary-pink py-4 text-lg font-semibold text-black transition duration-300 hover:bg-pink-400"
    >
      {groomsmanProductListDefinition.title}
    </Link>
  </div>
)

export default function HomePage() {
  return (
    <div className="p-1">
      <div className="rounded-lg bg-neutral-lightGray">
        <header className="relative w-full max-w-md bg-blue-300">
          <WelcomeBannerComponnet />
        </header>

        <main className="w-full max-w-md flex-1 text-center shadow-lg">
          <LocationComponent />
          <GiftListComponent />
        </main>
      </div>
      <footer className="py-2">
        <Link
          href={signInPageDefinition.path}
          className="flex justify-center font-bold text-secondary-darkBlue"
        >
          Entrar
        </Link>
      </footer>
    </div>
  )
}
