import React from 'react'
import Text from '../Text'

interface PropsTypes {
    title: string
    description: string
    hashtag: string
}

const ServiceCard = ({ title, description, hashtag }: PropsTypes) => {
    return (
        <article className='py-6 px-3 rounded-md border border-rouge w-full h-full shadow-[4px_4px_0_#995759]'>
            <h3 className='text-[22px] font-bold leading-[110%]'>{title}</h3>
            <div className='mt-4'>
                <Text leading={'very-tight'}>{description}</Text>
                <div className='mt-1'>
                    <Text leading={'very-tight'} variant={'secondary'} size={'sm'}>
                        {hashtag}
                    </Text>
                </div>
            </div>
        </article>
    )
}

export default ServiceCard
