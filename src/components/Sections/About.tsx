import React from 'react'
import Grid from '@/components/Grid'
import Text from '@/components/Text'
import Slider from '../Slider/Slider'

const About = () => {
    return (
        <section id='sobre' className='pt-16 lg:pt-24 scroll-m-16'>
            <Grid>
                <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                    <h2 className='text-center text-2xl'>Sobre mim</h2>
                </div>
            </Grid>
            <Grid className='items-center mt-8 gap-y-16'>
                <div className='col-span-12 md:col-start-2 md:col-span-10 lg:col-span-6 xl:col-span-5 xl:col-start-2'>
                    <Text>
                        Olá! 😊 Sou a Catarina De Oliveira e estou aqui para te acompanhar nesta jornada emocionante! ✨
                        <br />
                        <br />
                        Desde criança, fui uma sonhadora, sempre impulsionada pela curiosidade e pelo desejo de superar desafios.
                        <br />
                        <br />
                        Com uma formação em Ciências da Educação e um mestrado em Educação de Adultos e Intervenção Comunitária, a minha jornada era direcionada
                        para o serviço e a conexão com as pessoas. 🌍
                        <br />
                        <br />
                        Mas algo surpreendente aconteceu este ano: o destino levou-me a descobrir uma nova paixão: o marketing digital. 💡 Tirei o curso de
                        Gestão de Redes Sociais e dei vida ao meu próprio negócio. 📱
                        <br />
                        <br />
                        Não foi um caminho fácil, mas cada desafio ensinou-me a superar os meus limites. Sou uma pessoa empática, apaixonada por animais e tenho
                        um fiel amigo há cerca de 2 anos: o meu querido Olaf! 🐾 <span className='inline-block ml-px'></span> A minha família e amigos são o meu
                        porto seguro, a minha fonte de apoio e Inspiração! {'❤️'}
                        <br />
                        <br />
                        Agora, estou aqui, pronta para te ajudar a mostrar ao mundo a essência do teu negócio, assim como eu descobri a minha. Se tu também
                        sentes essa paixão pelo que fazes, mas ainda não conseguiste transmiti-la completamente, conta comigo para juntos fazermos o teu negócio
                        brilhar! 💼💫
                    </Text>
                </div>
                <div className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 xl:col-span-4 xl:col-start-8 relative rounded-md overflow-hidden shadow-[6px_6px_0_#995759] aspect-[1366/2048]'>
                    <Slider />
                </div>
            </Grid>
        </section>
    )
}

export default About
