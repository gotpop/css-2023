import * as React from 'react'
import styles from './Header.module.css'

export default function Intro({ content }) {
  const { title, text } = content

  return (
    <section className={styles.intro}>
      <h2>Hello</h2>
      <p>Text</p>
    </section>
  )
}
