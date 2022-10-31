import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Trigger from '@components/Trigger'
import styles from './Site.module.css'

const getScrollBarWidth = () => {
  let root = document.documentElement
  const width = window.innerWidth - root.clientWidth

  root.style.setProperty('--scrollbar-width', `${width}px`)
}

export default function Layout(props) {
  const { children } = props

  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <>
      <Head>
        <title>CSS 2023</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <div className={styles.site}>
        <Header />
        <div className="main-wrap">
          <main className="main">
            <Trigger />
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
