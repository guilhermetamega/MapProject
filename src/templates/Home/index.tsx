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
        title="Wonders of the Wolrd"
        description="Lugares lugares"
        canonical="https://www.allwondersworld.com"
        openGraph={{
          url: 'https://www.allwondersworld.com',
          title: 'Wonders of the Wolrd',
          description: 'Um simples site de aprendizado de mapas',
          images: [
            {
              url: 'https://www.allwondersworld.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Wonders of the Wolrd'
            }
          ],
          site_name: 'Wonders of the Wolrd'
        }}
      />
      <LinkWrapper href="/about">
        <Info size={64} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
