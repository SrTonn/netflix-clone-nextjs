import React from 'react'
import styles from './styles.module.css'
import { ItemsType } from '../../interfaces'

const rowList = ({ title, items }: {
  title: string,
  items: ItemsType,
}): JSX.Element => (
  <div className={styles.movieRow}>
    <h2>{title}</h2>
    <div className={styles.listArea}>
      <div className={styles.list}>
        {items.results.length > 0 && items.results
          .filter((item) => item.poster_path !== null)
          .map((item) => (
            <div className={styles.item} key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.name || item.title}
              />
            </div>
          ))}
      </div>
    </div>
  </div>
)

export default rowList
