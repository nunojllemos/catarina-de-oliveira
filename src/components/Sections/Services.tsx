import React from 'react'
import Text from '../Text'
import Grid from '../Grid'
import ServiceCard from '../Cards/ServiceCard'
import Container from '../Container'

const Services = () => {
    const services = [
        {
            title: '👩‍💻 Gestão de redes sociais',
            description:
                'Planeamento e Calendário Editorial, Criação de conteúdo, Otimização de Perfis e Páginas, Agendamento de Publicações, Estratégias para aumento de seguidores e engagement, Criação de Campanhas de Publicidade e Análide de Relatórios.',
            hashtag: '#social-networking',
        },
        {
            title: '🧠 Consultoria estratégica',
            description:
                'A nossa consultoria é uma oportunidade única para impulsionares o teu negócio para novos patamares de sucesso! Com a nossa orientação especializada, terás acesso a estratégias personalizadas e insights valiosos que te ajudarão a alcançar os teus objetivos de forma eficaz e eficiente.',
            hashtag: '#consulting',
        },
        {
            title: '📸 Captação de imagem',
            description: 'Através de fotografia ou videografia.',
            hashtag: '#media-content',
        },
        {
            title: '🖌️ Design gráfico',
            description: 'Todos os elementos gráficos e de identidade visual que uma marca necessita.',
            hashtag: '#design',
        },
        {
            title: '💻 Criação de websites',
            description: '',
            hashtag: '#web-content',
        },
    ]

    return (
        <section id='servicos' className='py-24 scroll-m-16'>
            <div className='mx-auto max-w-[35rem]'>
                <Container>
                    <Text position={'center'}>
                        Na nossa abordagem, colocamos sempre as pessoas em primeiro lugar ❤️.
                        <br />
                        Acreditamos firmemente nos nossos valores e esforçamo-nos diariamente para garantir que os nossos clientes se sintam cuidados e
                        apoiados. Acreditamos que ao fazê-lo, estamos a oferecer um serviço verdadeiramente excepcional aos que escolhem confiar em nós. ✨
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
