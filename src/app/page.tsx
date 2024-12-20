import Image from 'next/image'
import Link from 'next/link'
import { guestProductListDefinition } from './product-lists/guest/page-definition'
import { groomsmanProductListDefinition } from './product-lists/groomsman/page-definition'
import { signInPageDefinition } from './auth/sign-in/page-definition'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { PageDefinition } from '@/types/page-definition'

interface LinkComponentProps {
  pageDefinition: PageDefinition
}

const LinkComponent = ({ pageDefinition }: LinkComponentProps) => (
  <Link
    href={pageDefinition.path}
    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-pink py-4 text-lg font-semibold text-secondary-darkBlue transition duration-300 hover:bg-pink-400"
  >
    <Icon icon="ant-design:gift-twotone" className="text-secondary-darkBlue" />
    {pageDefinition.title}
  </Link>
)

const WelcomeBannerComponent: React.FC = () => (
  <>
    <div className="relative text-center text-white">
      <Image
        src="/images/casal.jpg"
        alt="Milena e Jonatas abraçados"
        layout="responsive"
        width={500}
        height={300}
        className="rounded-t-lg"
      />
      <div className="absolute inset-0 rounded-t-lg bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-md">
          Milena & Jonatas
        </h1>
        {/* <p className="text-lg text-white drop-shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
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
      className="h-[300px] w-[100%] border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4544.973339583093!2d-52.4089982!3d-23.082867600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94929570f9b87a3d%3A0xe92b0570edc0b006!2sMonumentalle!5e1!3m2!1spt-BR!2sbr!4v1734046394289!5m2!1spt-BR!2sbr"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa do local Monumentalle, Estação de Eventos"
    ></iframe>
  </div>
)

const GiftListComponent: React.FC = () => (
  <div className="space-y-4 bg-neutral-lightGray p-4">
    <h2 className="text-2xl font-bold text-secondary-darkBlue">
      Lista de presentes
    </h2>
    <p className="text-sm text-gray-700">
      Estamos muito felizes por dividir esse momento com você!
    </p>
    <p className="text-sm text-gray-700">
      Se desejar nos ajudar a começar nossa vida a dois, preparamos essa lista
      com muito carinho!
    </p>
    <LinkComponent pageDefinition={guestProductListDefinition} />
    <LinkComponent pageDefinition={groomsmanProductListDefinition} />
  </div>
)

export default function HomePage() {
  return (
    <>
      <div className="rounded-lg bg-neutral-lightGray">
        <header className="relative w-full max-w-md bg-blue-300">
          <WelcomeBannerComponent />
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
    </>
  )
}
