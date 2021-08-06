import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MovieRow from '../components/MovieRow'

const Home: React.FC = () => {
  const [movieList, setMovieList] = React.useState([])
  useEffect(() => {
    const loadAll = async () => {
      const res = await fetch('/api/tmdb')
      const data = await res.json()
      setMovieList(data)
    }
    loadAll()
  }, [])

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
        {movieList.map((item) => (
          <MovieRow
            title={item.title}
            items={item.items}
            key={item.title}
          />
        ))}
    </main>

    <footer>
      footer
    </footer>
  </div>
)

export default Home
