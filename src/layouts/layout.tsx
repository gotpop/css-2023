import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import MenuContext from '@context/MenuContext'
import Trigger from '@components/Trigger'

export default function Layout(props) {
  const { children } = props
  const { menu } = useContext(MenuContext)
  
  useEffect(() => {
    console.log('menu :', menu);
  }, [menu])
  
  return (
    <>
      <Head>
        <title>CSS 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="site">
        <Header />
        <div className="main-wrap">
          <Trigger />
          <h1>Value: {menu?.open?.toString()}</h1>
          <main className="main">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}
