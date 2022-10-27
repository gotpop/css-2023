import SelectMenu from '@components/SelectMenu'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import styles from './Header.module.css'

export default function NavBar({ content }) {
  const [value, setValue] = useState(1)
  const cb = e => setValue(e.target.value)

  return (
    <>
      <header className={styles.header}>
        <h1>Header</h1>

        <a className={styles.nav} href="https://github.com/gotpop/ui-system">
          GitHub
        </a>
        <a className={styles.nav} href="http://localhost:3000">
          LocalHost
        </a>

        <div>
          <h1>{value}</h1>
        </div>

        <SelectMenu cb={cb} />
      </header>
    </>
  )
}
