import Container from '@/components/Container'
import Logo from '@/components/Logo'
import Item from '@/components/Navigation/Item'
import ContactsItem from '@/components/Navigation/ContactsItem'

const Navigation = () => {
    const links = [
        {
            href: '/#sobre',
            title: 'Sobre',
        },
        {
            href: '/#servicos',
            title: 'Serviços',
        },
        {
            href: '/#planos',
            title: 'Planos',
        },
        {
            href: '/#blog',
            title: 'Blog',
        },
    ]

    return (
        <header className='border-b border-b-light-gray'>
            <Container>
                <div className='flex justify-between items-center py-4'>
                    <div className='max-w-60 md:max-w-72'>
                        <Logo />
                    </div>
                    <nav>
                        <menu className='flex items-center gap-6'>
                            {links.map(({ href, title }) => (
                                <Item key={href} href={href}>
                                    {title}
                                </Item>
                            ))}
                            <ContactsItem />
                        </menu>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Navigation
