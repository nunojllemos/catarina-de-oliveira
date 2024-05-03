import React from 'react'
import Link from 'next/link'

interface PropsTypes {
    children: React.ReactNode
    href: string
    onClick: () => void
}

const Item = ({ children, href, onClick }: PropsTypes) => {
    return (
        <li onClick={onClick}>
            <Link className='p-1 hover:text-rouge transition-colors duration-300 text-5xl text-rouge md:text-black md:text-base h-max block' href={href}>
                {children}
            </Link>
        </li>
    )
}

export default Item
