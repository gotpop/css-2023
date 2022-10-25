import * as React from 'react'
import styles from './Card.module.css'

export default function Card({ content }) {
  const { title, text } = content

  return (
    <article className={styles.card}>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  )
}
