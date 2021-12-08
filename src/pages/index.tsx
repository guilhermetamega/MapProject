import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { Info } from '@styled-icons/octicons'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={[]} />
    </>
  )
}
