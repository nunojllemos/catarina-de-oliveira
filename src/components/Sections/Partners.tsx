import React from 'react'
import Marquee from 'react-fast-marquee'
import McDonalds from '@/components/Icons/McDonalds'
import Grid from '@/components/Grid'

const Partners = () => {
    return (
        <>
            <Grid>
                <div className='md:col-start-2 lg:col-start-1 col-span-12 pb-1'>
                    <h2 className='text-rouge'>🤝🏼 Parceiros</h2>
                </div>
            </Grid>
            <section className='bg-rouge py-8'>
                <Marquee className='gap-x-8 md:gap-x-32'>
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                </Marquee>
            </section>
        </>
    )
}

export default Partners
