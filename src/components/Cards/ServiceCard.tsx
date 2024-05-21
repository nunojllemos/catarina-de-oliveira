import React from 'react'
import Text from '../Text'
import { zeroPad } from '@/utils'
import Button from '../Button'

interface PropsTypes {
    title: string
    description: string
    hashtag: string
    id: number
}

const ServiceCard = ({ title, description, hashtag, id }: PropsTypes) => {
    return (
        <article className='py-6 px-3 rounded-md border flex flex-col border-rouge w-full shadow-[4px_4px_0_#995759] grow'>
            <div className='flex items-center gap-4'>
                <Text leading={'very-tight'} variant='secondary'>
                    {zeroPad(id + 1)}
                </Text>
                <h3 className='text-[22px] font-bold leading-[110%]'>{title}</h3>
            </div>
            <div className='mt-4 mb-8'>
                <Text element='div' leading={'very-tight'}>
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </Text>
                <div className='mt-1'>
                    <Text leading={'very-tight'} variant={'secondary'} size={'sm'}>
                        {hashtag}
                    </Text>
                </div>
            </div>
            <div className='mt-auto'>
                <Button isLink={true} variant='secondary' href='#contactos'>
                    {'✉️'} Saber mais
                </Button>
            </div>
        </article>
    )
}

export default ServiceCard
