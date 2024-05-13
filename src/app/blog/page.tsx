import React from 'react'
import Link from 'next/link'
import Grid from '@/components/Grid'
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon'
import Text from '@/components/Text'
import PostsList from '@/components/PostsList'

export interface Post {
    id: number
    title: string
    date: string
    content: string
    cover: string
    author: string
    is_featured: boolean
    slug: string
}

export const metadata = {
    title: 'Catarina de Oliveira | Blog',
    description: 'Blog sobre gestão de redes sociais e marketing digital',
}

export default function Blog() {
    return (
        <React.Fragment>
            <Grid>
                <div className='col-span-12 py-8'>
                    <Link className='border border-black rounded-full py-2 px-4 block w-max group' href='/'>
                        <div className='flex items-center gap-1 w-max'>
                            <div className='group-hover:-translate-x-1 transition-transform duration-300'>
                                <LeftArrowIcon />
                            </div>
                            <Text>Voltar</Text>
                        </div>
                    </Link>
                </div>
                <div className='col-span-12 pt-8 pb-16'>
                    <Text position='center' size='xxxl' element='h1'>
                        Blog 👩🏼‍🎓
                    </Text>
                </div>
            </Grid>
            <PostsList />
        </React.Fragment>
    )
}
