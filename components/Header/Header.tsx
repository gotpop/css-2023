import * as React from 'react'
import styles from './Header.module.css'

export default function NavBar({ content }) {

  return (
    <header className={styles.header}>
      <h1>Header</h1>

        {/* <Link href={'https://github.com/gotpop/ui-system'}>GitHub</Link>
        <Link href={'http://localhost:3000'}>LocalHost</Link> */}
    </header>
  )
}
