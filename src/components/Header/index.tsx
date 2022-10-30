import Link from 'next/link'
import * as React from 'react'
import styles from './Header.module.css'
import Nav from '@components/Nav'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className="logo" href="/">
        <h1>CSS 2023</h1>
      </Link>
      <Nav />
    </header>
  )
}
