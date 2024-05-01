import React from 'react'
import Grid from '@/components/Grid'
import Button from '@/components/Button'
import Text from '@/components/Text'
import HeroImage from '@/components/Icons/HeroImage'

const Hero = () => {
    return (
        <section className='py-16'>
            <Grid isCenter={'center'}>
                <div className='col-span-5 col-start-2'>
                    <h2>💪🏼 MARKETING DIGITAL</h2>
                    <h1 className='pt-2 font-bold text-[4rem] leading-[95%]'>
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
                        <Button href={''}>Contactos</Button>
                        <Button href={''} variant={'secondary'}>
                            Serviços
                        </Button>
                    </div>
                </div>
                <div className='col-span-5'>
                    <HeroImage />
                </div>
            </Grid>
        </section>
    )
}

export default Hero
