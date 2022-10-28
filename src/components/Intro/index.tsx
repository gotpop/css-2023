import SelectMenu from '../SelectMenu'
import * as React from 'react'
import styles from './Intro.module.css'
import ColumnContext from '../../context/ColumnsContext'
import { useContext, useEffect, useRef } from 'react'

export default function Intro({ content }) {
  const { layout } = useContext(ColumnContext)
  const introRef = useRef(null)
  const { title, text } = content

  useEffect(() => {
    introRef.current.style.setProperty('--span-columns', layout.columns)
  }, [layout])

  return (
    <section className={styles.intro} ref={introRef}>
      <h2>{title}</h2>
      <p>{text}</p>
      <SelectMenu />
    </section>
  )
}
