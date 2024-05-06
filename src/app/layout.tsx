import '@/app/globals.css'
import { Lato } from 'next/font/google'
import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SearchContextProvider from '@/context/SearchContext'

const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata = {
    title: 'Catarina de Oliveira | Home',
    description: 'Marketing Digital',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SearchContextProvider>
            <html lang='en'>
                <body className={lato.className}>
                    <div className='flex flex-col min-h-screen'>
                        <Alert />
                        <Navigation />
                        <main className='flex-grow'>{children}</main>
                        <Footer />
                    </div>
                </body>
            </html>
        </SearchContextProvider>
    )
}
