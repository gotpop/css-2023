import { useState } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'

import Layout from '../layouts/layout'
import Intro from '../components/Intro'
import Card from '../components/Card'
import { cards } from '../content/cards'
import { introContent } from '../content/intro'

export default function Home() {
  return (
    <Layout>
      <Intro content={introContent} />
      {cards.map(card => (
        <Card key={card.title} content={card} />
      ))}
    </Layout>
  )
}
