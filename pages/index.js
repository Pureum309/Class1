import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Map from '../components/Map'
import HeaderComp from '../components/header'
import FooterComp from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Skytrain Expo Line</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/metro.png" />
      </Head>
      <HeaderComp />
      <hr style={{bordercolor:"#bbb", opacity: 0.5}}/>
      <main className={styles.main}>
        <div className={styles.title}>
          <h3>Expo Line connects Downtown Vancouver with the cities of Burnaby, New Westminster, and Surrey.</h3>
        </div>
        <Map className={styles.mapCont} />
        <div className={styles.titleCont}>
          <div className={styles.firstList}>
            <h3>The Expo Line operates two routes:</h3>
            <ul>
                <li>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</li>
                <li>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</li>
            </ul>
          </div>
          <div className={styles.firstList}>
            <h3>Transfer to the Millennium Line at the following stations:</h3>
            <ul>
                <li>Commercial–Broadway Station</li>
                <li>Lougheed Town Center Station</li>
                <li>Production Way-University Station</li>
            </ul>
          </div>
        </div>
      </main>
      <FooterComp />
    </>
  )
}
