import React from 'react'
import NetflixLogo from '../../../public/Netflix.svg'
import styles from './styles.module.css'

const Header = ({ isBlack }: {isBlack:boolean}): JSX.Element => (
  <header className={`${styles.Header} ${isBlack ? styles.HeaderBlack : ''}`}>
    <div>
      <a href="/" aria-label="Home" className={styles.HeaderLogo}>
        <NetflixLogo width={100} height={100} fill="red" />
      </a>
    </div>
    <div className={styles.HeaderUser}>
      <a href="/">
        <img
          src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
          alt="user"
        />
      </a>
    </div>
  </header>
)

export default Header
