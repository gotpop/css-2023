import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ColumnContext from '../context/ColumnsContext'
import { useContext } from 'react'

export default function Layout(props) {
  const { layout } = useContext(ColumnContext)
  const mainRef = useRef(null)
  const { children } = props

  useEffect(() => {
    mainRef.current.style.setProperty('--grid-columns', layout.columns)
  }, [layout])

  return (
    <>
      <Head>
        <title>NextJS Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="site">
        <main className="main" ref={mainRef}>
          {children}
        </main>
      </section>
      <Footer />
    </>
  )
}
