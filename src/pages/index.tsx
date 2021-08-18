import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MovieRow from '../components/MovieRow'
import Header from '../components/Header'
import FeaturedMovie from '../components/FeaturedMovie'

const Home: React.FC = () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

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

      <footer>
        footer
      </footer>
    </div>
  )
}

export default Home
