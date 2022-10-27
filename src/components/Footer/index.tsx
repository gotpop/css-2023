import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Copyright © {new Date().getFullYear()}. All rights reserved.</div>
    </footer>
  )
}
