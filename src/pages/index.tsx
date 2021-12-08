import dynamic from 'next/dynamic'

// @styled-icons/octicons/Info
// @styled-icons/octicons/x-circle

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return <Map places={[]} />
}
