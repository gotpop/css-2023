import * as React from 'react'
import { useEffect, useRef } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import styles from './Modal.module.css'

export default function Modal() {
  const dialog = useRef(null)

  useEffect(() => {
    const cat = localStorage.getItem('dontShowAgain')

    if (cat === null) dialog.current.showModal()
  }, [])

  const dontShowAgain = () => {
    localStorage.setItem('dontShowAgain', 'true')
  }

  return (
    <dialog ref={dialog} className={styles.dialog}>
      <h4>This is a tech demo of upcoming CSS features</h4>
      <p>
        Please ensure that you're using either Chrome or Chrome Canary with the
        following flag enabled:
      </p>
      <pre>chrome://flags/#enable-experimental-web-platform-features</pre>
      <p className={styles.colourV1}>
        <span>COLRv1 supported</span>
        <AiOutlineCheckCircle
          style={{ color: 'var(--success)', fontSize: '1.5em' }}
        />
      </p>
      <form method="dialog" className={styles.buttons}>
        <button className={styles.button}>
          <span>I understand</span>
          <BsCheckLg style={{ color: 'var(--success)', fontSize: '1em' }} />
        </button>
        <button className={styles.button} onClick={dontShowAgain}>
          <span>Dont show again</span>
          <ImCross style={{ color: 'var(--error)', fontSize: '1em' }} />
        </button>
      </form>
    </dialog>
  )
}
