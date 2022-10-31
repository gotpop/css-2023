import * as React from 'react'
import { useContext, useRef } from 'react'
import styles from './Trigger.module.css'
import ColumnContext from '@context/MenuContext'
import { set } from '@utils/setPropsOnRoot'

export default function Trigger() {
  const button = useRef(null)
  const { menu, setMenu } = useContext(ColumnContext)

  const handleClick = () => {
    setMenu(prevState => {
      const newState = !prevState.open

      newState
        ? set('--menu-state', 'var(--menu-open)')
        : set('--menu-state', 'var(--menu-closed)')

      return { open: newState }
    })
  }

  return (
    <button onClick={handleClick} className={styles.button} ref={button}>
      {!menu.open && <span>Open Menu</span>}
      {menu.open && <span>Close Menu</span>}
    </button>
  )
}
