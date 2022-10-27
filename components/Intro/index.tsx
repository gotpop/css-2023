import SelectMenu from '@components/SelectMenu'
import * as React from 'react'
import styles from './Intro.module.css'
import ColumnContext from '@context/ColumnsContext'
import { useContext } from 'react'

export default function Intro({ content }) {
  const { columns } = useContext(ColumnContext)
  const { title, text } = content

  return (
    <section
      className={styles.intro}
      style={{ gridColumn: `span ${columns.columns}` }}>
      <h2>Hello</h2>
      <p>Text</p>
      <SelectMenu />
    </section>
  )
}
