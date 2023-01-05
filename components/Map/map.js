import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

// function GetIcon() {
//     return L.icon({
//         iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
//         iconSize: 50,
//     })
// }

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
    //Surrey
    const scott = [49.20471128321348, -122.87402016143083];
    const gateway = [49.1996395517773, -122.85066524767126];
    const surreyCentral = [49.189969431491576, -122.84800706742232];
    const kingGeorge = [49.18311468493535, -122.84484248491187];

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

    const surryline = [
        columbia,
        scott,
        gateway,
        surreyCentral,
        kingGeorge
    ]

    const purpleOption = { color: 'purple' };
    const redOption = { color: 'red' };

    return (
        <MapContainer className={style.map} center={waterfront} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={waterfront} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Waterfront Station
                </Popup>
            </Marker>
            <Marker position={burrard} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Burrard Station
                </Popup>
            </Marker>
            <Marker position={granville} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Granville Station
                </Popup>
            </Marker>
            <Marker position={chinaTown} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Stadium-Chinatown Station
                </Popup>
            </Marker>
            <Marker position={mainStreet} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Main Street–Science World Station
                </Popup>
            </Marker>
            <Marker position={commercial} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Commercial–Broadway Station
                </Popup>
            </Marker>
            <Marker position={nanaimo} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Nanaimo Station
                </Popup>
            </Marker>
            <Marker position={twentynineth} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> 29th Avenue Station
                </Popup>
            </Marker>
            <Marker position={joyce} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Joyce–Collingwood Station
                </Popup>
            </Marker>
            <Marker position={patterson} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Patterson Station
                </Popup>
            </Marker>
            <Marker position={metroTown} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Metrotown Station
                </Popup>
            </Marker>
            <Marker position={royalOak} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Royal Oak Station
                </Popup>
            </Marker>
            <Marker position={edmonds} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Edmonds Station
                </Popup>
            </Marker>
            <Marker position={twentytwo} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> 22nd Street Station
                </Popup>
            </Marker>
            <Marker position={newWest} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> New Westminster Station
                </Popup>
            </Marker>
            <Marker position={columbia} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Columbia Station
                </Popup>
            </Marker>
            <Marker position={sapperton} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Sapperton Station
                </Popup>
            </Marker>
            <Marker position={braid} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Braid Station
                </Popup>
            </Marker>
            <Marker position={lougheed} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Lougheed Town Station
                </Popup>
            </Marker>
            <Marker position={productionWay} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Production Way-University Station
                </Popup>
            </Marker>
            <Marker position={scott} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Scott Road Station
                </Popup>
            </Marker>
            <Marker position={gateway} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Gateway Station
                </Popup>
            </Marker>
            <Marker position={surreyCentral} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> Surrey Central Station
                </Popup>
            </Marker>
            <Marker position={kingGeorge} /*icon={GetIcon()}*/>
                <Popup>
                    Sky Train Expo Line: <br/> King George Station
                </Popup>
            </Marker>
           
            <CircleMarker center={productionWay} pathOptions={redOption} radius={20} >
                <Popup>Transfer Millennium Line</Popup>
            </CircleMarker>
            <CircleMarker center={lougheed} pathOptions={redOption} radius={20} >
                <Popup>Transfer Millennium Line</Popup>
            </CircleMarker>
            <CircleMarker center={commercial} pathOptions={redOption} radius={20} >
                <Popup>Transfer Millennium Line</Popup>
            </CircleMarker>

            <Polyline pathOptions={purpleOption} positions={productionline} />
            <Polyline pathOptions={purpleOption} positions={surryline} />
        </MapContainer>
    )
}