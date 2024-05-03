import React from 'react'
import Button from '../Button'

const Search = () => {
    return (
        <div className='flex gap-x-6'>
            <input
                id='search'
                className='border border-light-gray py-1 px-2 rounded-[5px] max-w-80 w-80 placeholder:text-light-gray'
                placeholder='Pesquisar...'
                type='text'
            />
            <Button isLink={false}>🔍 Pesquisar</Button>
        </div>
    )
}

export default Search
