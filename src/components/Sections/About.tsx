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
                        Olá! 😊 O meu nome é Catarina De Oliveira, tenho 38 anos, e sou especialista em gestão de redes sociais, apaixonada por ajudar empresas
                        a alcançarem o seu potencial máximo online. 💼
                        <br />
                        <br />
                        Construí a minha própria empresa do zero e estou pronta para impulsionar a tua presença nas redes sociais e criar conexões autênticas
                        com o teu público-alvo. 🚀 A minha abordagem estratégica, criativa e dedicação visam aumentar as interações, construir relacionamentos
                        duradouros e gerar um impacto positivo na perceção da tua marca.
                        <br />
                        <br />
                        Sou reconhecida pela minha habilidade em elevar as marcas a um patamar de referência no mercado. 🏆 Acredito no destaque das redes
                        sociais na era digital e como elas podem impactar diretamente os resultados do teu negócio. 💡
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
