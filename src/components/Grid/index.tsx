import React from 'react'
import Container from '@/components/Container'
import { cva, VariantProps } from 'class-variance-authority'

const variants = cva('grid grid-cols-12 gap-x-5', {
    variants: {
        isCenter: {
            default: 'items-left',
            center: 'items-center',
        },
    },
    defaultVariants: {
        isCenter: 'default',
    },
})

interface PropsTypes extends VariantProps<typeof variants>, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    hasContainer?: boolean
}

const Grid = ({ children, isCenter, className, hasContainer = true }: PropsTypes) => {
    if (!hasContainer) return <div className={variants({ isCenter, className })}>{children}</div>

    return (
        <Container>
            <div className={variants({ isCenter, className })}>{children}</div>
        </Container>
    )
}

export default Grid
