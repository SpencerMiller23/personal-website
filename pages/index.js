import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Technologies } from '../components/Technologies'
import { Education } from '../components/Education'
import { Hobbies } from '../components/Hobbies'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spencerverse | My Personal website</title>
        <meta name="description" content="Spencer Miller | Full-stack software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='content-container w-screen h-screen flex flex-col py-[60px] md:pt-[210px] overflow-y-scroll'>
        <Hero />
        <Technologies />
        <Education />
        <Hobbies />
      </div>
    </div>
  )
}
