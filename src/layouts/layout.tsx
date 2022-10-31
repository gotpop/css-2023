import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import MenuContext from '@context/MenuContext'
import Trigger from '@components/Trigger'
import styles from './Site.module.css'

export default function Layout(props) {
  const { children } = props
  // const { menu } = useContext(MenuContext)

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px'
    )
  }, [])

  return (
    <>
      <Head>
        <title>CSS 2023</title>
        <link rel="icon" href="/favicon.ico" />
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
