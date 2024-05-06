import React from 'react'
import { Url } from 'next/dist/shared/lib/router/router'
import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'

const variants = cva('py-2 px-5 border border-rouge rounded-full transition-colors duration-300', {
    variants: {
        variant: {
            primary: 'bg-rouge text-white hover:bg-white hover:text-rouge',
            secondary: 'bg-white text-rouge hover:bg-rouge hover:text-white',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

interface PropsTypes extends VariantProps<typeof variants>, React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    isLink?: boolean
    href?: Url
}

const Button = ({ children, isLink = true, href = '', variant, className }: PropsTypes) => {
    return isLink ? (
        <Link href={href} className='block'>
            <button className={variants({ variant, className })}>{children}</button>
        </Link>
    ) : (
        <button className={variants({ variant, className })}>{children}</button>
    )
}

export default Button
