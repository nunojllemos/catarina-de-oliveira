import React from 'react'
import { promises as fs } from 'fs'
import Link from 'next/link'
import Grid from '@/components/Grid'
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon'
import Text from '@/components/Text'

interface Post {
    id: number
    title: string
    date: string
    content: string
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

export default async function Blog({ params: { slug } }: PropsTypes) {
    const file = await fs.readFile(process.cwd() + '/public/blog-data.json', 'utf8')
    const post: Post = JSON.parse(file).data.filter((post: Post) => post.slug === slug)[0]

    return (
        <React.Fragment>
            <Grid>
                <div className='col-span-12 py-8'>
                    <Link className='border border-black rounded-full py-2 px-4 block w-max group' href='/blog'>
                        <div className='flex items-center gap-1 w-max'>
                            <div className='group-hover:-translate-x-1 transition-transform duration-300'>
                                <LeftArrowIcon />
                            </div>
                            <Text>Voltar</Text>
                        </div>
                    </Link>
                </div>
                <div className='col-span-12 pt-8 pb-16'>
                    <Text position='center' size='xl' element='h1'>
                        {post.title}
                    </Text>
                </div>
            </Grid>
        </React.Fragment>
    )
}
