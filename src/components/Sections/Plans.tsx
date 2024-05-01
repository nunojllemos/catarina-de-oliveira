import React from 'react'
import Grid from '../Grid'
import PlanCard from '../Cards/PlanCard'
import Text from '../Text'

const Plans = () => {
    const plans = [
        {
            title: 'Básico',
            value: '130',
            posts: '2',
            stories: '3',
            reels: '1',
            report: 'Trimestral',
            hashtags: '10',
        },
        {
            title: 'Intermédio',
            value: '170',
            posts: '3',
            stories: '5',
            reels: '3',
            report: 'Bimestral',
            hashtags: '20',
        },
        {
            title: 'Avançado',
            value: '230',
            posts: '5',
            stories: '7',
            reels: '5',
            report: 'Mensal',
            hashtags: 'Hashtags rotativos',
        },
    ]

    return (
        <section className='py-24 bg-rouge'>
            <Grid>
                <div className='col-span-10 col-start-2 flex gap-x-5'>
                    {plans.map(({ title, value, posts, stories, reels, report, hashtags }) => (
                        <div key={title} className='w-full'>
                            <PlanCard title={title} value={value} posts={posts} stories={stories} reels={reels} report={report} hashtags={hashtags} />
                        </div>
                    ))}
                </div>
                <div className='col-span-12 mt-8'>
                    <Text size={'sm'} variant={'normal'} position={'center'}>
                        {'⚠️'} A todos os valores acresce a taxa de IVA em vigor
                    </Text>
                </div>
            </Grid>
        </section>
    )
}

export default Plans
