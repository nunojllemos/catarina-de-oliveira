import React from 'react'
import Grid from '@/components/Grid'
import Button from '@/components/Button'
import Text from '@/components/Text'
import HeroImage from '@/components/Icons/HeroImage'

const Hero = () => {
    return (
        <section className='py-16 relative lg:static'>
            <Grid className='gap-y-16' isCenter={'center'}>
                <div className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 xl:col-span-5 xl:col-start-2'>
                    <h2>💪🏼 MARKETING DIGITAL</h2>
                    <h1 className='pt-2 font-bold text-5xl md:text-[4rem] leading-[95%]'>
                        Aumente
                        <br /> a presença
                        <br /> do seu negócio
                        <br /> no mundo digital
                    </h1>
                    <div className='py-8'>
                        <Text>
                            O marketing digital ajuda a promover o seu negócio.
                            <br />
                            Negócios com uma boa presença online têm 54% mais chances de angariarem potenciais novos clientes.
                        </Text>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <Button className='w-full md:w-max' href={''}>
                            Contactos
                        </Button>
                        <Button className='w-full md:w-max' href={''} variant={'secondary'}>
                            Serviços
                        </Button>
                    </div>
                </div>
                <div className='absolute right-8 top-1/2 -translate-y-1/2 w-[calc(100%_-_4rem)] md:w-[50%] opacity-15 lg:translate-y-0 lg:w-auto lg:opacity-100 lg:static col-span-8 col-start-3 lg:col-span-6 xl:col-span-5'>
                    <HeroImage />
                </div>
            </Grid>
        </section>
    )
}

export default Hero
