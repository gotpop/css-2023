import Link from 'next/link'
import * as React from 'react'
import styles from './Header.module.css'

export default function NavBar({ content }) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Header</h1>
      </Link>
      <nav className={styles.nav}>
        <a href="https://github.com/gotpop/ui-system">GitHub</a>
        <a href="http://localhost:3000">LocalHost</a>
      </nav>
    </header>
  )
}
