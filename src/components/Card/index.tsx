import * as React from 'react'
import styles from './Card.module.css'
import { TfiGithub } from 'react-icons/tfi'
import { SiCsswizardry, SiMozilla } from 'react-icons/si'

export default function Card({ content }) {
  const { title, text } = content

  return (
    <div className={styles.card}>
      <article className={styles.inner}>
        <section className={styles.content}>
          <h1>{title}</h1>
          <p>{text}</p>
        </section>
        <aside className={styles.icons}>
          <div className={styles.iconwrap}>
            <div className={styles.text}>View GitHub</div>
            <TfiGithub className={styles.icon} />
          </div>
          <div className={styles.iconwrap}>
            <div className={styles.text}>View CSS Spec</div>
            <SiCsswizardry className={styles.icon} />
          </div>
          <div className={styles.iconwrap}>
            <div className={styles.text}>View on MDN</div>
            <SiMozilla className={styles.icon} />
          </div>
        </aside>
      </article>
    </div>
  )
}
