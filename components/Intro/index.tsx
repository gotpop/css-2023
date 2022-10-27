import SelectMenu from '@components/SelectMenu'
import * as React from 'react'
import styles from './Intro.module.css'
import ColumnContext from '@context/ColumnsContext'
import { useContext } from 'react'

export default function Intro({ content }) {
  const { layout } = useContext(ColumnContext)
  const { title, text } = content

  return (
    <section
      className={styles.intro}
      style={{ gridColumn: `span ${layout.columns}` }}>
      <h2>{title}</h2>
      <p>{text}</p>
      <SelectMenu />
    </section>
  )
}
