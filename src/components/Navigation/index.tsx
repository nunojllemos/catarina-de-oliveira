import Link from 'next/link'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import RenderNav from './RenderNav'

const Navigation = () => {
    return (
        <header className='border-b border-b-light-gray sticky top-0 z-[11] bg-white'>
            <Container>
                <div className='flex justify-between items-center py-2 md:py-4'>
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
