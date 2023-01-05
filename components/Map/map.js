import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const waterfront = [49.28594, -123.11129];
    const burrard = [49.28561614204017, -123.12010100179711];
    const granville = [49.28276095478281, -123.11645918645324];
    const chinaTown = [49.279798456796705, -123.10987266132106];
    const mainStreet = [49.27328184157504, -123.10037764139919];
    const commercial = [49.26275906456214, -123.06920684115377];
    const nanaimo = [49.24841985224161, -123.05592295055052];
    const twentynineth = [49.244469619208395, -123.04610735268527];
    const joyce = [49.23853095107949, -123.03171135092538];
    const patterson = [49.22990412639399, -123.01270098510345];
    const metroTown = [49.22595059796108, -123.00383508610999];
    const royalOak = [49.22023830010708, -122.98853725430949];
    const edmonds = [49.212455151694144, -122.9591513431673];
    const twentytwo = [49.20009040892968, -122.94927424452341];
    const newWest = [49.20124621559889, -122.91428535761987];
    const columbia = [49.20498062029403, -122.90616969469775];
    const sapperton = [49.224887366798214, -122.8894236372209];
    const braid = [49.23310893378634, -122.88297989432266];
    const lougheed = [49.248789038247686, -122.89722340127271];
    const productionWay = [49.253672556202254, -122.91872242836777];




    const productionline = [
        waterfront,
        burrard,
        granville,
        chinaTown,
        mainStreet,
        commercial,
        nanaimo,
        twentynineth,
        joyce,
        patterson,
        metroTown,
        royalOak,
        edmonds,
        twentytwo,
        newWest,
        columbia,
        sapperton,
        braid,
        lougheed,
        productionWay
    ]

    const purpleOption = { color: 'purple' };
    const redOption = { color: 'red' };

    return (
        <MapContainer className={style.map} center={waterfront} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={waterfront}>
                <Popup>
                    Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <CircleMarker center={productionWay} pathOptions={redOption} radius={20} >
                <Popup>Final Destination</Popup>
            </CircleMarker>

            <Polyline pathOptions={purpleOption} positions={productionline} />
        </MapContainer>
    )
}