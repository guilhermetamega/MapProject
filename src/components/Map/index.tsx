import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places: Place[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {places?.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
          >
            <Popup>Lugar bunito</Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default Map
