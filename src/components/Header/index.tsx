import Link from 'next/link'
import * as React from 'react'
import { TfiGithub } from 'react-icons/tfi'
import { GoZap } from 'react-icons/go'
import { AiFillHome } from 'react-icons/ai'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className="logo" href="/">
        <h1>CSS 2023</h1>
      </Link>
      <nav className={styles.nav}>
        <a href="https://github.com/gotpop/ui-system">
          <span>GitHub</span>
          <TfiGithub style={{ color: 'var(--success)', fontSize: '1em' }} />
        </a>
        <a href="http://localhost:3000">
          <span>LocalHost</span>
          <AiFillHome style={{ color: 'var(--error)', fontSize: '1em' }} />
        </a>
        <a href="https://ui-system-gold.vercel.app/">
          <span>Live</span>
          <GoZap style={{ color: 'var(--warning)', fontSize: '1em' }}/>
        </a>
      </nav>
    </header>
  )
}
