import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MovieRow from '../components/MovieRow'
import Header from '../components/Header'
import FeaturedMovie from '../components/FeaturedMovie'

const Home: React.FC = () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [isBlackHeader, setIsBlackHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setIsBlackHeader(true)
      } else {
        setIsBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  useEffect(() => {
    const loadAll = async () => {
      const res = await fetch('/api/tmdb/HomeList')
      const data = await res.json()
      setMovieList(data)

      const originals = data.filter((i) => i.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfoData = await fetch(`/api/tmdb/MovieInfo/tv/${chosen.id}`)
      const chosenInfo = await chosenInfoData.json()
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
        <meta
          name="description"
          content="Site desenvolvido como forma de estudo por
           Wellington Rodrigues"
        />
      </Head>

      <Header isBlack={isBlackHeader} />

      <main className={styles.page}>
        {featuredData
        && <FeaturedMovie item={featuredData} />}
        <section className={styles.HomeLists}>
          {movieList.map((item) => (
            <MovieRow
              title={item.title}
              items={item.items}
              key={item.title}
            />
          ))}
        </section>
      </main>

      <footer className={styles.Footer}>
        Feito com
        {' '}
        <span role="img" aria-label="coração">
          &#10084;&#65039;
        </span>
        {' '}
        por
        {' '}
        <a
          href="http://github.com/SrTonn"
          target="_blank"
          rel="noreferrer"
        >
          Wellington R.
        </a>
        <br />
        Direitos de imagem para Netflix
        <br />
        Dados pegos do site
        {' '}
        <a
          href="http://Themoviedb.org"
          target="_blank"
          rel="noreferrer"
        >
          Themoviedb.org
        </a>
      </footer>
      {movieList.length <= 0
      && (
        <div className={styles.Loading}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wired.com%2Fwp-content%2Fuploads%2F2016%2F01%2FNetflix_LoadTime.gif&f=1&nofb=1"
            alt="loading"
          />
        </div>
      )}
    </div>
  )
}

export default Home
