'use client'
import React, { createContext, useEffect, useState } from 'react'

export interface Context {
    inputValue: string
    handleInput: (value: string) => void
}

export const SearchContext = createContext<Context | null>(null)

interface PropsTypes {
    children: React.ReactNode
}

const SearchContextProvider = ({ children }: PropsTypes) => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleInput = (value: string) => setInputValue(value)

    return <SearchContext.Provider value={{ inputValue, handleInput }}>{children}</SearchContext.Provider>
}

export default SearchContextProvider
