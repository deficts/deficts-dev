import React from 'react'
import Container from '../../components/container'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import MoreStories from '../../components/more-stories'
import { getAllPosts } from '../../lib/api'
import Post from '../../interfaces/post'
import Head from 'next/head'

type Props = {
    allPosts: Post[]
}

export const Index = ({ allPosts }: Props) => {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)

    return (
        <>
            <Layout>
                <Head>
                    <title>Blog</title>
                </Head>
                <Container>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
  )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ])
    return {
        props: { allPosts },
    }
}

export default Index;