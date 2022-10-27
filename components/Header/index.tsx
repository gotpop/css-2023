import SelectMenu from '@components/SelectMenu'
import Link from 'next/link'
import * as React from 'react'
import { useContext } from 'react'
import styles from './Header.module.css'
import ColumnContext from '@context/ColumnsContext'

export default function NavBar({ content }) {
  const { columns } = useContext(ColumnContext)

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
          <h1>Value: {columns.columns}</h1>
        </div>
      </header>
    </>
  )
}
