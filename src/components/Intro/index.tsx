import * as React from 'react'
import styles from './Intro.module.css'
import SelectMenu2 from '@components/SelectMenu'

export default function Intro({ content }) {
  const { title, text } = content
  const customProperty = '--grid-columns'

  return (
    <section className={styles.intro}>
      <h2>{title}</h2>
      <p>{text}</p>
      <SelectMenu2 customProperty={customProperty} />
    </section>
  )
}
