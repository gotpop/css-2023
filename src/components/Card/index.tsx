import * as React from 'react'
import styles from './Card.module.css'
import { TfiGithub } from "react-icons/tfi";
import { SiCsswizardry, SiMozilla } from "react-icons/si";

export default function Card({ content }) {
  const { title, text } = content

  return (
    <article className={styles.card}>
      <h1>{title}</h1>
      <p>{text}</p>
      <TfiGithub />
      <SiCsswizardry />
      <SiMozilla />
    </article>
  )
}
