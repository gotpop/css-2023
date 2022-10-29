import * as React from 'react'
import { useEffect, useRef } from 'react'
import styles from './SelectMenu.module.css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      selectmenu: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >
    }
  }
}

export default function SelectMenu({ customProperty }) {
  const selectMenu = useRef(null)
  const cb = e =>
    document.documentElement.style.setProperty(customProperty, e.target.value)

  useEffect(() => {
    selectMenu.current.addEventListener('change', cb)

    return () => selectMenu.current.removeEventListener('change', cb)
  }, [])

  return (
    <div>
      <selectmenu
        ref={selectMenu}
        className={styles.menu}
        defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled style={{ display: 'none' }}>
          Choose number of grid columns ...
        </option>
        <option value="1">1 Column</option>
        <option value="2">2 Columns</option>
        <option value="3">3 Columns</option>
      </selectmenu>
    </div>
  )
}
