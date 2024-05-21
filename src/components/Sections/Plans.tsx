import React from 'react'
import Grid from '../Grid'
import PlanCard from '../Cards/PlanCard'
import Text from '../Text'
import Button from '../Button'

const Plans = () => {
    const plans = [
        {
            title: 'Bronze',
            price: '130',
            posts: '2',
            stories: '3',
            reels: '1',
            report: 'Trimestral',
        },
        {
            title: 'Prata',
            price: '170',
            posts: '3',
            stories: '5',
            reels: '3',
            report: 'Bimestral',
        },
        {
            title: 'Ouro',
            price: '230',
            posts: '5',
            stories: '7',
            reels: '5',
            report: 'Mensal',
        },
    ]

    return (
        <section className='py-24 bg-rouge scroll-m-16' id='packs'>
            <Grid>
                <div className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-12 xl:col-span-10 xl:col-start-2 flex flex-wrap lg:flex-nowrap gap-y-8 gap-x-5'>
                    {plans.map(({ title, price, posts, stories, reels, report }) => (
                        <div key={title} className='w-full'>
                            <PlanCard title={title} price={price} posts={posts} stories={stories} reels={reels} report={report} />
                        </div>
                    ))}
                </div>
                <div className='col-span-12 mt-8'>
                    <Text size={'sm'} variant={'normal'} position={'center'}>
                        {'⚠️'} Valores sob consulta
                    </Text>
                </div>
            </Grid>
            <div className='mt-16 hidden lg:flex justify-center'>
                <Button isLink={true} variant='secondary' href='#contactos'>
                    {'✉️'} Obtenha mais informações
                </Button>
            </div>
        </section>
    )
}

export default Plans
