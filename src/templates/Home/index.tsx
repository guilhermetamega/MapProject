import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { Info } from '@styled-icons/octicons'
import { MapProps } from 'components/Map'

import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Meus Lugares"
        description="Lugares lugares"
        canonical="https://local.guitamega.com.br"
        openGraph={{
          url: 'https://meuslugares.com',
          title: 'Meus lugares',
          description: 'Um simples site de aprendizado de mapas',
          images: [
            {
              url: 'https://meuslugares.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Meus Lugares'
            }
          ],
          site_name: 'Meus Lugares'
        }}
      />
      <LinkWrapper href="/about">
        <Info size={64} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
