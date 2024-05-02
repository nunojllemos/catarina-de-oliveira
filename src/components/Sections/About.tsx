import React from 'react'
import Image from 'next/image'
import Grid from '@/components/Grid'
import Text from '@/components/Text'

const About = () => {
    return (
        <section id='sobre' className='pt-16 lg:pt-24 scroll-m-16'>
            <Grid>
                <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                    <h2 className='text-center'>🐞 Sobre mim</h2>
                </div>
            </Grid>
            <Grid className='items-center mt-8 gap-y-16'>
                <div className='col-span-12 md:col-start-2 md:col-span-10 lg:col-span-6 xl:col-span-5 xl:col-start-2'>
                    <Text>
                        Lorem ipsum dolor sit amet ❤️, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim 🌱 veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br />
                        <br />
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 🥰
                    </Text>
                </div>
                <div className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 xl:col-span-4 xl:col-start-8 relative rounded-md overflow-hidden shadow-[6px_6px_0_#995759]'>
                    <div className='bg-white/25 w-full h-full absolute top-0 left-0 z-10'></div>
                    <Image alt='' src='/image.jpg' className='w-full !relative' fill={true} />
                </div>
            </Grid>
        </section>
    )
}

export default About
