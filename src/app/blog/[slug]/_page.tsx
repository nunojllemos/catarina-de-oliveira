'use client'
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Grid from '@/components/Grid'
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon'
import Text from '@/components/Text'

interface Post {
    id: number
    title: string
    date: string
    content: { __html: string | TrustedHTML }
    cover: string
    author: string
    is_featured: boolean
    slug: string
}

interface PropsTypes {
    params: {
        slug: string
    }
}

export default function Blog({ params: { slug } }: PropsTypes) {
    const [post, setPost] = useState<Post>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch('/blog-data.json')
            .then(res => res.json())
            .then(data => {
                const newPost = data.data.filter((post: Post) => post.slug === slug)[0]
                setLoading(false)
                setPost(newPost)
            })
    }, [slug])

    if (!post && !loading) return notFound()

    return (
        <React.Fragment>
            {post && (
                <Grid>
                    <div className='col-span-12 py-8'>
                        <Link className='border border-black rounded-full py-2 px-4 block w-max group' href='/blog'>
                            <div className='flex items-center gap-1 w-max'>
                                <div className='group-hover:-translate-x-1 transition-transform duration-300'>
                                    <LeftArrowIcon />
                                </div>
                                <Text>Voltar ao Blog</Text>
                            </div>
                        </Link>
                    </div>
                    <div className='col-span-12 md:col-span-10 md:col-start-2 pt-4 md:pt-8 pb-16'>
                        <div className='py-1'>
                            <Text size='sm' variant='secondary'>
                                Postado em {post.date} por {post.author}
                            </Text>
                        </div>
                        <div className='w-full relative aspect-video overflow-hidden rounded-md'>
                            <Image alt='' fill={true} src={post.cover} />
                        </div>
                        <div className='my-8 md:my-16'>
                            <Text position='center' size='xxl' element='h1'>
                                {post.title}
                            </Text>
                        </div>
                        <div id='post-content-container' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                </Grid>
            )}
        </React.Fragment>
    )
}
