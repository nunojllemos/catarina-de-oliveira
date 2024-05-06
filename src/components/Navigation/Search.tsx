'use client'
import React, { useContext, useEffect, useRef } from 'react'
import Button from '../Button'
import { Context, SearchContext } from '@/context/SearchContext'

const Search = () => {
    const input = useRef<HTMLInputElement>(null)
    const { handleInput, inputValue } = useContext(SearchContext) as Context

    const handleInputChange = () => {
        const value = input.current?.value
        handleInput(value as string)
    }

    return (
        <div className='flex gap-x-4 md:gap-x-6 w-full md:w-max'>
            <input
                ref={input}
                onChange={handleInputChange}
                id='search'
                className='border border-light-gray py-1 px-2 rounded-[5px] block w-full md:max-w-80 md:w-80 placeholder:text-light-gray'
                placeholder='Pesquisar...'
                type='text'
            />
            <Button isLink={false}>
                🔍 <span className='hidden md:inline'>Pesquisar</span>
            </Button>
        </div>
    )
}

export default Search
