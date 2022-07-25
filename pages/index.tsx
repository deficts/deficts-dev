import Layout from '../components/layout'
import Head from 'next/head'
import { Home } from '../components/home'

export default function Index() {
  
  return (
    <>
      <Layout>
        <Head>
          <title>Deficts.</title>
        </Head>
        <div className="h-screen container mx-auto px-5">
          <Home></Home>
        </div>
      </Layout>
    </>
  )
}
