import React from 'react'
import Link from 'next/link'
import Grid from '@/components/Grid'
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon'
import Text from '@/components/Text'
import { promises as fs } from 'fs'
import BlogCard from '@/components/Cards/BlogCard'

interface Post {
    id: number
    title: string
    date: string
    content: string
    cover: string
    author: string
    is_featured: boolean
}

export default async function Blog() {
    const file = await fs.readFile(process.cwd() + '/public/blog-data.json', 'utf8')
    const posts: Post[] = JSON.parse(file).data

    return (
        <React.Fragment>
            <Grid>
                <div className='col-span-12 py-8'>
                    <Link className='flex items-center gap-1 group' href='/'>
                        <div className='group-hover:-translate-x-1 transition-transform duration-300'>
                            <LeftArrowIcon />
                        </div>
                        <Text>Voltar</Text>
                    </Link>
                </div>
                <div className='col-span-12 pt-8 pb-16'>
                    <Text position='center' size='xxl' element='h1'>
                        Blog 👩🏼‍🎓
                    </Text>
                </div>
            </Grid>
            <Grid className='gap-y-5 pb-16'>
                {posts.map(
                    post =>
                        post.is_featured && (
                            <div key={post.id} className='col-span-6'>
                                <BlogCard author={post.author} date={post.date} title={post.title} src={post.cover} />
                            </div>
                        )
                )}
                {posts.map(
                    post =>
                        !post.is_featured && (
                            <div key={post.id} className='col-span-4'>
                                <BlogCard isSmall={true} author={post.author} date={post.date} title={post.title} src={post.cover} />
                            </div>
                        )
                )}
            </Grid>
        </React.Fragment>
    )
}
