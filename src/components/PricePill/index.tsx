import React from 'react'

interface PropsTypes {
    price: string
}

const PricePill = ({ price }: PropsTypes) => {
    return <div className='opacity-50 px-4 py-1 flex items-center rounded-full border border-rouge text-rouge leading-none'>€ {price}</div>
}

export default PricePill
