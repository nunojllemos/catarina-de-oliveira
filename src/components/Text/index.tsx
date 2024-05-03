import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const variants = cva('', {
    variants: {
        variant: {
            primary: 'text-black',
            secondary: 'text-light-gray',
            normal: 'text-white',
        },
        leading: {
            'very-tight': 'leading-[110%]',
            loose: 'leading-[135%]',
        },
        position: {
            default: 'text-left',
            center: 'text-center',
        },
        size: {
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
            xxl: 'text-[64px]',
        },
    },
    defaultVariants: {
        size: 'md',
        position: 'default',
        variant: 'primary',
        leading: 'loose',
    },
})

interface PropsTypes extends VariantProps<typeof variants> {
    children: React.ReactNode
    element?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Text = ({ children, element = 'p', size, position, variant, leading }: PropsTypes) => {
    const E: React.ElementType = element
    return <E className={variants({ size, position, variant, leading })}>{children}</E>
}

export default Text
