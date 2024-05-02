'use client'
import { useState } from 'react'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import Item from '@/components/Navigation/Item'
import ContactsItem from '@/components/Navigation/ContactsItem'
import HamburgerIcon from '../Icons/HamburgerIcon'
import CloseIcon from '../Icons/CloseIcon'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
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

    const toggleMenu = () => {
        console.log('clicked')
        setIsMenuOpen(prev => !prev)
    }

    return (
        <header className='border-b border-b-light-gray sticky top-0 z-[11] bg-white'>
            <Container>
                <div className='flex justify-between items-center py-2 md:py-4'>
                    <div className='max-w-52 md:max-w-60 xl:max-w-72'>
                        <Logo />
                    </div>
                    <button onClick={toggleMenu} className='md:hidden'>
                        <HamburgerIcon />
                    </button>
                    <nav
                        className={`fixed bg-white/95 w-full h-full top-0 left-0 z-10 md:static md:bg-transparent md:w-auto md:h-auto transition-transform duration-300 ${
                            isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
                        }`}
                    >
                        <button onClick={toggleMenu} className='absolute right-8 top-8 md:hidden'>
                            <CloseIcon />
                        </button>
                        <menu className='flex flex-col justify-center h-full md:h-auto md:flex-row items-center gap-8 md:gap-4 xl:gap-6'>
                            {links.map(({ href, title }) => (
                                <Item onClick={toggleMenu} key={href} href={href}>
                                    {title}
                                </Item>
                            ))}
                            <ContactsItem onClick={toggleMenu} />
                        </menu>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Navigation
