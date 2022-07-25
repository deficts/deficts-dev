import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon.png"
      />
      <meta
        name="description"
        content={`Diego Arredondo blog`}
      />
    </Head>
  )
}

export default Meta
