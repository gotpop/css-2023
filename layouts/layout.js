import React from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>NextJS Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main className='main'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
