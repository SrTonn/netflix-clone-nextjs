import React from 'react'
import styles from './styles.module.css'
import { FeaturedMovieProps } from '../../interfaces'

const FeaturedMovie = ({ item }: {item: FeaturedMovieProps}): JSX.Element => (
  <section
    className={styles.featured}
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
    }}
  >
    <div>
      { item.original_name}
    </div>
  </section>
)
export default FeaturedMovie
