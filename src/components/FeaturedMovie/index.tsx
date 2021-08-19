import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AddIcon from '@material-ui/icons/Add'
import styles from './styles.module.css'
import { FeaturedMovieProps } from '../../interfaces'

const FeaturedMovie = ({ item }: {item: FeaturedMovieProps}): JSX.Element => {
  const firstDate = new Date(item.first_air_date).getFullYear()
  const genres = []
  Object.values(item.genres).forEach((genre) => genres.push(genre.name))

  const descriptionSizeNumber = window.innerWidth > 600
    ? window.innerWidth / 2
    : window.innerWidth
  let description = item.overview
  while (description.length > descriptionSizeNumber || description.match(/(?:Dr|Sr)a?\.$/i)) {
    description = description.substr(0, description.lastIndexOf('. ') + 1)
  }
  if (description.length < 10) {
    description = `${item.overview.substring(0, descriptionSizeNumber)}...`
  }

  return (
    <section
      className={styles.featured}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={styles.featuredVertical}>
        <div className={styles.featuredHorizontal}>
          <div className={styles.featuredName}>{item.original_name}</div>
          <div className={styles.featuredInfo}>
            <div className={styles.featuredPoints}>
              {item.vote_average}
              {' '}
              pontos
            </div>
            <div className={styles.featuredYear}>{firstDate}</div>
            <div className={styles.featuredSeasons}>
              {item.number_of_seasons}
              {' '}
              Temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className={styles.featuredDescription}>{description}</div>
            <div className={styles.featuredButtons}>
              <a
                href={`/watch/${item.id}`}
                className={styles.featuredWatchButton}
              >
                <PlayArrowIcon style={{ transform: 'translateY(18%)' }} />
                {' '}
                Assistir
              </a>
              <a
                href={`/list/add/${item.id}`}
                className={styles.featuredMyListButton}
              >
                <AddIcon style={{ transform: 'translateY(18%)' }} />
                {' '}
                Minha Lista
              </a>
            </div>
            <div className={styles.featuredGenres}>
              <strong>Gêneros:</strong>
              {' '}
              {genres.join(', ')}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default FeaturedMovie
