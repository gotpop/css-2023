import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ColumnContext from '../context/ColumnsContext'
import { useContext } from 'react'

export default function Layout(props) {
  const { layout } = useContext(ColumnContext)
  const { children } = props

  return (
    <>
      <Head>
        <title>NextJS Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className="main"
        style={{ gridTemplateColumns: `repeat(${layout.columns}, 1fr)` }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
