import React from 'react'
import Text from '../Text'
import Grid from '../Grid'
import ServiceCard from '../Cards/ServiceCard'
import Container from '../Container'

const Services = () => {
    const services = [
        // {
        //     title: '👩‍💻 Gestão de Redes Sociais',
        //     description:
        //         '<span>Passas horas a criar conteúdos incríveis ✨, a aperfeiçoar as legendas 📝 e no final... nada. <br/><br/> Nem um gosto 👍, nem uma partilha 🔄, apenas a frustração 😞 de pensar que poderias ter utilizado esse tempo de outra maneira, certo? Relaxa, não estás sozinho/a nisso. Estamos aqui para te ajudar a mudar o jogo. <br/><br/> <b>Estás pronto/a para deixar de ser o melhor segredo guardado das redes sociais? Anda falar connosco e vamos fazer com que o mundo ouça (e veja) o teu talento!</b> Clica já e reserva o teu lugar na primeira fila para o sucesso nas redes. Não deixes os teus posts fantásticos passarem despercebidos!</span>',
        //     hashtag: '#social-networking',
        // },
        {
            title: 'Análise de perfil do Instagram',
            description:
                '<span>🔍 <b>Queres ser encontrada facilmente nas pesquisas do Instagram?</b> <br/><br/> Se a resposta é sim, então está na hora de otimizar o teu perfil! 📈 <br/><br/> Melhora o teu nome, título, bio, CTA e link para garantir que estás a aparecer nas pesquisas relevantes. 🧲 Não te esqueças de organizar os teus destaques para que os teus seguidores sintam que estão a entrar numa "casa arrumada" e pronta para vender.<br/><br/>📸 <b>Segue a regra dos primeiros 9 posts:</b> Os primeiros nove posts são cruciais para causar uma boa impressão – eles devem ser visualmente atrativos e representar o teu negócio.<br/>E o melhor? Vais receber 30 ideias de conteúdo personalizadas para manter o teu perfil sempre atualizado e dinâmico. 🚀<br/><br/>👉 <b>Fala comigo</b> e começa já a transformar a tua presença online!</span>',
            hashtag: '#social-networking',
        },
        {
            title: 'Gestão de Redes Sociais – FB e IG',
            description:
                '<span><b>Sentes que estás a desperdiçar o potencial das tuas redes sociais?</b> 📉🤔 <br/><br/>Vamos resolver isso! Começamos com uma estratégia de conteúdo eficaz, replicando o que funciona tanto no Facebook como no Instagram, para garantir consistência e maximizar o alcance. 📅📈 A seguir, criamos um planeamento mensal que organiza todas as tuas publicações e agendamentos, assegurando uma presença constante e relevante. 🗓️<br/><br/>Mas não paramos por aqui! A nossa estratégia de hashtags é pensada para dar mais visibilidade ao teu conteúdo, enquanto técnicas de engajamento e interatividade mantêm a tua audiência sempre ligada ao que tens para oferecer. 📲💬<br/><br/>E não te preocupes com o visual! Tratamos da edição das imagens e vídeos que nos envias, ajustando-os para que fiquem em linha com a tua marca. 🎨<br/><br/>Por fim, analisamos regularmente os dados para otimizar todas as estratégias, garantindo que estás sempre a evoluir e a alcançar melhores resultados. 🚀<br/><br/>👉 <b>Queres ver a tua presença online a crescer?</b> Vamos trabalhar juntos para transformar o teu perfil e conquistar mais clientes! 💪</span>',
            hashtag: '#profile',
        },
        // {
        //     title: '🧠 Análise de Perfil',
        //     description:
        //         '<span>Sabes quando sentes que o teu negócio tem um potencial incrível, mas não tens a certeza de como mostrá-lo ao mundo? 🤔 Pois bem, temos algo especial para ti! ✅ Com este serviço, realizamos uma avaliação detalhada do teu perfil, entregando-te um relatório repleto de recomendações 📊 e estratégias eficazes que vai encaixar na perfeição com o que a tua marca precisa. 📈 <br/><br/> <b>Pronto/a para fazer a tua marca brilhar e não sabes por onde começar?</b> Não fiques parado/a, clica aqui e vamos transformar essa ideia em realidade! 🚀✨</span>',
        //     hashtag: '#profile',
        // },
        // {
        //     title: '📸 Captação de Imagem',
        //     description:
        //         '<span>Queres uma presença digital única, atrativa e profissional 🌟, mas tens dificuldade em criar conteúdo visual que reflita a qualidade da tua marca? 😟 <br/><br/> Não te preocupes mais! Temos a solução perfeita para ti. 🎯 <br/><br/> O nosso serviço de Captação de Imagem 📸 oferece fotografia e vídeo de alta qualidade 🎥, ideais para elevar a atratividade da tua marca e aprofundar a conexão visual com o teu público. 👥 <br/><br/> <b>Deixa-nos ajudar a destacar a tua marca de forma autêntica e irresistível! ✨</b></span>',
        //     hashtag: '#media-content',
        // },
        // {
        //     title: '🖌️ Design Gráfico',
        //     description:
        //         '<span>Queres ver as tuas vendas disparar 📈, ganhar mais visibilidade online 🌐 e alcançar novos horizontes? 🚀 <br/><br/> <b>O nosso serviço de design gráfico é a chave para o teu sucesso!</b> 🗝️ <br/><br/> Vamos criar elementos gráficos impressionantes 🎨 que vão fortalecer a identidade visual da tua marca, desde logotipos impactantes 🏷️ até posts cativantes para as redes sociais. <br/><br/> ✨ <b>Não percas mais tempo! 🌟 Entra em contacto connosco hoje mesmo e vamos juntos dar vida à tua marca! </b> 🚀💬</span>',
        //     hashtag: '#design',
        // },
        // {
        //     title: '💻 Criação de Websites',
        //     description:
        //         '<span>Queres um site intuitivo, responsivo e otimizado para motores de busca 🌐 que destaque a tua marca no mundo digital? 💻 <br/><br/> <b>Nós temos a solução!</b> ✅ <br/><br/> Com o nosso serviço de criação de websites, desenvolvemos a plataforma perfeita para a tua presença online. <br/><br/> 🌟 <b> Vamos dar um boost à tua marca! 🚀 Fala connosco hoje e juntos criaremos o site dos teus sonhos! </b> 💻✨</span>',
        //     hashtag: '#web-content',
        // },
    ]

    return (
        <section id='servicos' className='py-24 scroll-m-16'>
            <div className='mx-auto max-w-[35rem]'>
                <Container>
                    <Text position={'center'}>
                        Tu és mais que um cliente, és parte da nossa família! {'❤️'}
                        <br />
                        Todos os dias trabalhamos com dedicação para garantir que te sintas valorizado e apoiado.
                        <br />
                        <br />
                        Juntos, vamos tornar cada experiência única e especial! 🤝🏼✨
                    </Text>
                </Container>
            </div>
            <Grid className='mt-16 gap-y-4'>
                <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                    <Grid hasContainer={false} className='gap-y-4'>
                        {services.map(({ title, description, hashtag }, index) => (
                            <div key={hashtag} className='col-span-12 lg:col-span-10 lg:col-start-2 xl:col-start-auto xl:col-span-6 h-full flex flex-col gap-8'>
                                <ServiceCard id={index} title={title} description={description} hashtag={hashtag} />
                            </div>
                        ))}
                    </Grid>
                </div>
            </Grid>
        </section>
    )
}

export default Services
