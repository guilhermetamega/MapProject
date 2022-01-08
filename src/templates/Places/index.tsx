import { XCircle } from '@styled-icons/octicons'

import { NextSeo } from 'next-seo'
import Image from 'next/image'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Wonders of the Wolrd`}
        description={
          place.description?.text || 'Site about the wonders of the world.'
        }
        canonical="https://allwondersworld.com"
        openGraph={{
          url: 'https://allwondersworld.com',
          title: `${place.name} - Wonders of the Wolrd`,
          description:
            place.description?.text || 'Site about the wonders of the world.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <XCircle size={64} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={image.width}
                height={image.height}
                quality={100}
                layout="responsive"
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
