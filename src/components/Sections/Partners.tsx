import React from 'react'
import Marquee from 'react-fast-marquee'
import McDonalds from '@/components/Icons/McDonalds'
import Grid from '@/components/Grid'
import Image from 'next/image'

const Partners = () => {
    const partners = [
        {
            id: 0,
            aspectRatio: '331/122',
        },
        {
            id: 1,
            aspectRatio: '900/113',
            height: 1.5,
        },
    ]

    return (
        <>
            <Grid>
                <div className='md:col-start-2 lg:col-start-1 col-span-12 pb-1'>
                    <h2 className='text-rouge'>🤝🏼 Parceiros</h2>
                </div>
            </Grid>
            <section className='bg-rouge py-6'>
                <Marquee className='gap-x-8 md:gap-x-32'>
                    {partners.map(partner => (
                        <div
                            key={`partner-${partner.id}`}
                            style={{ aspectRatio: partner.aspectRatio, height: `${partner.height || 3}rem` }}
                            className='relative'
                        >
                            <Image
                                priority={true}
                                alt={`Partner logo with id ${partner.id}`}
                                className='object-cover'
                                src={`/partners/partner-${partner.id}.png`}
                                fill={true}
                            />
                        </div>
                    ))}
                    {partners.map(partner => (
                        <div
                            key={`partner-${partner.id}`}
                            style={{ aspectRatio: partner.aspectRatio, height: `${partner.height || 3}rem` }}
                            className='relative'
                        >
                            <Image
                                priority={true}
                                alt={`Partner logo with id ${partner.id}`}
                                className='object-cover'
                                src={`/partners/partner-${partner.id}.png`}
                                fill={true}
                            />
                        </div>
                    ))}
                    {partners.map(partner => (
                        <div
                            key={`partner-${partner.id}`}
                            style={{ aspectRatio: partner.aspectRatio, height: `${partner.height || 3}rem` }}
                            className='relative'
                        >
                            <Image
                                priority={true}
                                alt={`Partner logo with id ${partner.id}`}
                                className='object-cover'
                                src={`/partners/partner-${partner.id}.png`}
                                fill={true}
                            />
                        </div>
                    ))}
                    {partners.map(partner => (
                        <div
                            key={`partner-${partner.id}`}
                            style={{ aspectRatio: partner.aspectRatio, height: `${partner.height || 3}rem` }}
                            className='relative'
                        >
                            <Image
                                priority={true}
                                alt={`Partner logo with id ${partner.id}`}
                                className='object-cover'
                                src={`/partners/partner-${partner.id}.png`}
                                fill={true}
                            />
                        </div>
                    ))}
                </Marquee>
            </section>
        </>
    )
}

export default Partners
