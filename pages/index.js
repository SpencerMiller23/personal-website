import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Technologies } from '../components/Technologies'
import { Education } from '../components/Education'
import { FeaturedProjects } from '../components/FeaturedProjects'
import { Role } from '../components/Role'
import roleData from '../components/Role/roleData'
import { Section } from '../components/Section'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spencer Miller | Web3 Developer</title>
        <meta name="description" content="Spencer Miller | Web3 Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='content-container w-screen h-screen flex flex-col py-[60px] md:pt-[210px] overflow-y-scroll'>
        <Hero />
        <Technologies />
        <Section header='Projects' childComponent={<FeaturedProjects />} />
        <Section header='Current Role' childComponent={<Role roleData={roleData[0]} />} />
        <Section header='Education' childComponent={<Education />} />
      </div>
    </div>
  )
}
