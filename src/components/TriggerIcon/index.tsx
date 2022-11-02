import * as React from 'react'
import { useEffect, useRef } from 'react'
import styles from './TriggerIcon.module.css'
import styles2 from './Trig.module.css'

export default function TriggerIcon({ menuState }) {
  const trigger = useRef(null)
  const { open } = menuState

  useEffect(() => {
    console.log('menuState :', menuState)

    open
      ? trigger.current.setAttribute('liam', true)
      : trigger.current.setAttribute('liam', false)
  }, [menuState])

  return (
    <span className={styles.icon} ref={trigger}>
      <span className={styles2.top}></span>
      <span className={styles2.middle}></span>
      <span className={styles2.bottom}></span>
    </span>
  )
}