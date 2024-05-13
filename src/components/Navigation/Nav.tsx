'use client'
import React, { useState } from 'react'
import HamburgerIcon from '../Icons/HamburgerIcon'
import CloseIcon from '../Icons/CloseIcon'
import ContactsItem from './ContactsItem'
import Item from './Item'

const Nav = () => {
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
            href: '/#packs',
            title: 'Packs',
        },
        {
            href: '/blog',
            title: 'Blog',
        },
    ]

    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Nav
