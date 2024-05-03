'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Nav from './Nav'
import Search from './Search'

const RenderNav = () => {
    const pathname = usePathname()

    return pathname.includes('/blog') ? <Search /> : <Nav />
}

export default RenderNav
