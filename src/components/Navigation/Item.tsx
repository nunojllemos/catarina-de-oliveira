import React from 'react'
import Link from 'next/link'

interface PropsTypes {
    children: React.ReactNode
    href: string
}

const Item = ({ children, href }: PropsTypes) => {
    return (
        <li>
            <Link className='p-1 hover:text-rouge transition-colors duration-300' href={href}>
                {children}
            </Link>
        </li>
    )
}

export default Item
