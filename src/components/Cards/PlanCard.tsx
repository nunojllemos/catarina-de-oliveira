import React from 'react'
import PricePill from '../PricePill'
import Text from '../Text'
import Button from '../Button'
import Link from 'next/link'

interface PropsTypes {
    title: string
    price: string
    posts: string
    stories: string
    reels: string
    report: string
    hashtags?: string
}

const PlanCard = ({ title, price, posts, stories, reels, report, hashtags }: PropsTypes) => {
    return (
        <article className='bg-white rounded-md border border-rouge shadow-[4px_4px_0_#FFF] py-6 px-4 '>
            <div className='flex gap-4'>
                <h3 className='text-3xl text-rouge font-bold'>{title}</h3>
                {!price && <PricePill price={price} />}
            </div>
            <div className='mt-8'>
                <ul className='w-full'>
                    <li className='flex justify-between pt-[2px]'>
                        <Text>Posts por semana</Text>
                        <Text>{posts}</Text>
                    </li>
                    <li className='flex justify-between pt-[2px]'>
                        <Text>Stories por semana</Text>
                        <Text>{stories}</Text>
                    </li>
                    <li className='flex justify-between pt-[2px]'>
                        <Text>Reels por mês</Text>
                        <Text>{reels}</Text>
                    </li>
                    <li className='flex justify-between pt-[2px]'>
                        <Text>Relatório</Text>
                        <Text>{report}</Text>
                    </li>
                    {hashtags && (
                        <li className='flex justify-between pt-[2px]'>
                            <Text>Set de hashtags</Text>
                            <Text>{hashtags}</Text>
                        </li>
                    )}
                </ul>
            </div>
            <div className='mt-8 block lg:hidden'>
                <Link className='border-b border-rouge text-rouge' href='/#contactos'>
                    + Saber mais
                </Link>
            </div>
        </article>
    )
}

export default PlanCard
