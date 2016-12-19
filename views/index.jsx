import React from 'react'
import Layout from './layout'
import Jumbo from './bootstrap/Jumbo'

export default function Component({ title }) {
  return (
    <Layout>
      <Jumbo heading='My Heading' text='this is some text' />
      <h1>{ title }</h1>
    </Layout>  
  )
}
