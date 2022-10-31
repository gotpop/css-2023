import * as React from 'react'
import { useContext, useRef } from 'react'
import styles from './Trigger.module.css'
import ColumnContext from '@context/MenuContext'

export default function Trigger() {
  const button = useRef(null)
  const { setMenu } = useContext(ColumnContext)
  const onClick = () => setMenu(prev => ({ open: !prev.open }))

  return (
    <button onClick={onClick} className={styles.button} ref={button}>
      <span>Click</span>
    </button>
  )
}
