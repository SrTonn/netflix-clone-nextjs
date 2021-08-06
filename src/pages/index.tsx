import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MovieRow from '../components/MovieRow'
import Netflix from '../../public/Netflix.svg'

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        Header
        <div>
          <a href="/">
            <Netflix width={100} height={100} fill="red" />
          </a>
        </div>
      </header>

      <main className={styles.page}>
        <h1>
          Destaque
          <br />
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
}

export default Home
