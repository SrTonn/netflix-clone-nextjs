import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import styles from './styles.module.css'
import { MovieRowProps } from '../../interfaces'

const rowList = ({ title, items }: {
  title: string,
  items: MovieRowProps,
}): JSX.Element => {
  const [scrollX, setScrollX] = useState(-400)
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    const listWidth = items.results.length * 150
    if ((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60
    }
    setScrollX(x)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const element = event.target as HTMLElement
    if (event.key === 'ArrowLeft'
      || (event.key === 'Enter' && element.className.match(/MovieRowLeft/g))) {
      handleLeftArrow()
    }
    if (event.key === 'ArrowRight'
      || (event.key === 'Enter' && element.className.match(/MovieRowRight/g))) {
      handleRightArrow()
    }
  }

  return (
    <div className={styles.MovieRow}>
      <h2>{title}</h2>
      <div
        className={styles.MovieRowLeft}
        role="button"
        tabIndex={0}
        onClick={handleLeftArrow}
        onKeyDown={handleKeyDown}
      >
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div
        className={styles.MovieRowRight}
        role="button"
        tabIndex={0}
        onClick={handleRightArrow}
        onKeyDown={(e) => handleKeyDown(e)}
      >
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.MovieRowListArea}>
        <div
          className={styles.MovieRowList}
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 && items.results
            .filter((item) => item.poster_path !== null)
            .map((item) => (
              <div className={styles.MovieRowItem} key={item.id}>
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
}

export default rowList
