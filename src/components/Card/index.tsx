import * as React from 'react'
import styles from './Card.module.css'
import { TfiGithub } from 'react-icons/tfi'
import { SiCsswizardry, SiMozilla } from 'react-icons/si'
import { DiCssTricks } from 'react-icons/di'
import { AiFillChrome, AiOutlineLink } from 'react-icons/ai'
import { FaEdge } from 'react-icons/fa'


export default function Card({ content }) {
  const { title, text, links } = content

  return (
    <div className={styles.card}>
      <article className={styles.inner}>
        <section className={styles.content}>
          <h1>{title}</h1>
          <p>{text}</p>
        </section>
        <aside className={styles.icons}>
          {links.map(link => (
            <a key={link.name} href={link.href} className={styles.iconwrap}>
              <span className={styles.text}>{link.name}</span>
              {link.name === 'GitHub' ? (
                <TfiGithub className={styles.icon} />
              ) : link.name === 'CSS' ? (
                <SiCsswizardry className={styles.icon} />
              ) : link.name === 'CSS Tricks' ? (
                <DiCssTricks className={styles.icon} />
              ) : link.name === 'Chrome' ? (
                <AiFillChrome className={styles.icon} />
              ) : link.name === 'Edge' ? (
                <FaEdge className={styles.icon} />
              ) : link.name === 'MDN' ? (
                <SiMozilla className={styles.icon} />
              ) : (
                <AiOutlineLink className={styles.icon} />
              )}
            </a>
          ))}
        </aside>
      </article>
    </div>
  )
}
