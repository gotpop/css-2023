import * as React from 'react'
import { MouseEventHandler, useEffect, useRef } from 'react'
import { IconType } from 'react-icons'
import styles from './ButtonIcon.module.css'

interface IButtonIcon {
  content: string
  properties?: { local: string; global: string }[]
  icon?: IconType
  doClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ButtonIcon({
  content = 'Click',
  properties,
  icon: Icon,
  doClick
}: IButtonIcon) {
  const first = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      first.current.style.setProperty(prop.local, prop.global)
    })
  }, [])

  return (
    <button onClick={doClick} className={styles.button} ref={first}>
      <span>{content}</span>
      <Icon />
    </button>
  )
}
