import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Text from '../Text'

interface PropsTypes {
    title: string
    src: string
    date: string
    author: string
    isSmall?: boolean
    slug: string
}

const BlogCard = ({ title, src, date, author, isSmall = false, slug }: PropsTypes) => {
    return (
        <Link className='group' href={`/blog/${slug}`}>
            <article className={`border border-rouge rounded-md shadow-[5px_5px_0_#995759] h-full ${isSmall ? 'p-4' : 'p-4 md:p-6'}`}>
                <div className='aspect-video relative rounded-md overflow-hidden'>
                    <Image
                        priority={!isSmall}
                        sizes='100vw, (min-width: 1024px) 50vw'
                        className='group-hover:scale-105 transition-all duration-500'
                        alt=''
                        fill={true}
                        src={src}
                    />
                </div>
                <div className='mt-1'>
                    <Text size='sm' variant='secondary'>
                        Publicado em {date} por {author}
                    </Text>
                </div>
                <div className='mt-4'>
                    <Text element='h2' size={isSmall ? 'lg' : 'xl'}>
                        {title}
                    </Text>
                </div>
            </article>
        </Link>
    )
}

export default BlogCard
