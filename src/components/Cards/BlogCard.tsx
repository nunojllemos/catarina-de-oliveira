import Image from 'next/image'
import React from 'react'
import Text from '../Text'

interface PropsTypes {
    title: string
    src: string
    date: string
    author: string
    isSmall?: boolean
}

const BlogCard = ({ title, src, date, author, isSmall = false }: PropsTypes) => {
    return (
        <article className={`border border-rouge rounded-md shadow-[5px_5px_0_#995759] h-full ${isSmall ? 'p-4' : 'p-6'}`}>
            <div className='aspect-video relative rounded-md overflow-hidden'>
                <Image alt='' fill={true} src={src} />
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
    )
}

export default BlogCard
