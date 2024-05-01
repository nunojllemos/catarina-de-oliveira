import React from 'react'

interface PropsTypes {
    children: React.ReactNode
}

const Container = ({ children }: PropsTypes) => {
    return <div className='mx-auto max-w-[90rem] px-4'>{children}</div>
}

export default Container
