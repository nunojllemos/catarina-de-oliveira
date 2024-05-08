import React from 'react'
import Marquee from 'react-fast-marquee'
import McDonalds from '@/components/Icons/McDonalds'
import Grid from '@/components/Grid'
import Image from 'next/image'

const Partners = () => {
    return (
        <>
            <Grid>
                <div className='md:col-start-2 lg:col-start-1 col-span-12 pb-1'>
                    <h2 className='text-rouge'>🤝🏼 Parceiros</h2>
                </div>
            </Grid>
            <section className='bg-rouge py-6'>
                <Marquee className='gap-x-8 md:gap-x-32'>
                    {/* <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds />
                    <McDonalds /> */}
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                    <div className='relative h-12 aspect-[331/122]'>
                        <Image alt='' className='object-cover' src='/partners/partner-0.png' fill={true} />
                    </div>
                </Marquee>
            </section>
        </>
    )
}

export default Partners
