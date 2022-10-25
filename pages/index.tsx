import { useState } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import Layout from '@layouts/layout'
import Intro from '@components/Intro/intro'
import { cards } from '@content/cards'
import Card from '@components/Card/card'

export default function Home() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <Layout>
      {/* <Intro content={introContent} /> */}
      {/* <h1>Radix UI</h1> */}
      {cards.map(card => <Card key={card.title} content={card} />)}
    </Layout>
  )
}
