import * as React from 'react'
import { useEffect, useRef } from 'react'
import styles from './SelectMenu.module.css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      selectmenu: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export default function SelectMenu({ cb }) {
  const selectMenu = useRef(null)

  useEffect(() => {
    selectMenu.current.addEventListener('change', cb)

    return () => {
      selectMenu.current.removeEventListener('custom-input', cb)
    }
  })

  return (
    <div>
      <selectmenu ref={selectMenu} className={styles.menu}>
        <option value="1">1 Column</option>
        <option value="2">2 Column</option>
        <option value="3">3 Column</option>
      </selectmenu>
    </div>
  )
}
