import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
      Header
    </header>

    <main className={styles.main}>
      <h1>
        Destaque
        <br />
        Listas
      </h1>
    </main>

    <footer>
      footer
    </footer>
  </div>
)

export default Home
