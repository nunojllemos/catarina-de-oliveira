'use client'
import Link from 'next/link'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import RenderNav from './RenderNav'
import { usePathname } from 'next/navigation'
import SearchContextProvider from '@/context/SearchContext'

const Navigation = () => {
    const pathname = usePathname()
    const isBlogPage = pathname.includes('/blog')

    return (
        <header className='border-b border-b-light-gray sticky top-0 z-[11] bg-white'>
            <Container>
                <div className={`flex ${isBlogPage ? 'flex-col md:flex-row gap-4' : 'flex-row'} w-full justify-between items-center py-2 md:py-4`}>
                    <div className='max-w-52 md:max-w-60 xl:max-w-72'>
                        <Link href='/'>
                            <Logo />
                        </Link>
                    </div>
                    <RenderNav />
                </div>
            </Container>
        </header>
    )
}

export default Navigation
