import React from 'react'
import Text from '../Text'
import Grid from '../Grid'
import ServiceCard from '../Cards/ServiceCard'
import Container from '../Container'

const Services = () => {
    const services = [
        {
            title: '💾 Presença online consistente',
            description: 'Uma presença online consistente é a base para uma boa gestão das redes sociais.',
            hashtag: '#social-networking',
        },
        {
            title: '🎥 Criação de conteúdo relevante',
            description: 'Hoje em dia o conteúdo tem de seguir certos padrões para se tornar atrativo para o consumidor.',
            hashtag: '#copyright-matters',
        },
        {
            title: '👀 Monitorização da concorrência',
            description: 'É importante que o seu negócio esteja atento ao mercado para acompanhar as novas tendências.',
            hashtag: '#market-evaluation',
        },
        {
            title: '🥰 Atendimento personalizado',
            description: 'Cada cliente é único e fazemos tudo para que se sinta dessa forma.',
            hashtag: '#people-first',
        },
        {
            title: '📊 Análise de relatórios',
            description: 'Analisamos os dados estastísticos digitais do seu negócio de forma a adaptar a estratégia inicial.',
            hashtag: '#data-reports',
        },
    ]

    return (
        <section id='servicos' className='py-24 scroll-m-16'>
            <div className='mx-auto max-w-[35rem]'>
                <Container>
                    <Text position={'center'}>
                        Olhamos para os nosso clientes como pessoas primeiro ❤️ e por isso, defendemos os nossos valores diariamente acreditando que desta forma
                        os que decidem ficar connosco estão em boas mãos.
                    </Text>
                </Container>
            </div>
            <Grid className='mt-16 gap-y-8'>
                <div className='hidden xl:block'></div>
                {services.map(({ title, description, hashtag }) => (
                    <div key={hashtag} className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-4 xl:col-span-2'>
                        <ServiceCard title={title} description={description} hashtag={hashtag} />
                    </div>
                ))}
            </Grid>
        </section>
    )
}

export default Services
