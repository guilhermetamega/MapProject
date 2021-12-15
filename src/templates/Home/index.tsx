import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { Info } from '@styled-icons/octicons'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={64} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
