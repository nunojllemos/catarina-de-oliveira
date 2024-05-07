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
                <head>
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='57x57' href='/favicons/light/apple-icon-57x57.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='57x57' href='/favicons/dark/apple-icon-57x57.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='60x60' href='/favicons/light/apple-icon-60x60.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='60x60' href='/favicons/dark/apple-icon-60x60.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='72x72' href='/favicons/light/apple-icon-72x72.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='72x72' href='/favicons/dark/apple-icon-72x72.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='76x76' href='/favicons/light/apple-icon-76x76.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='76x76' href='/favicons/dark/apple-icon-76x76.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='114x114' href='/favicons/light/apple-icon-114x114.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='114x114' href='/favicons/dark/apple-icon-114x114.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='120x120' href='/favicons/light/apple-icon-120x120.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='120x120' href='/favicons/dark/apple-icon-120x120.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='144x144' href='/favicons/light/apple-icon-144x144.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='144x144' href='/favicons/dark/apple-icon-144x144.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='152x152' href='/favicons/light/apple-icon-152x152.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='152x152' href='/favicons/dark/apple-icon-152x152.png' />
                    <link media='(prefers-color-scheme: light)' rel='apple-touch-icon' sizes='180x180' href='/favicons/light/apple-icon-180x180.png' />
                    <link media='(prefers-color-scheme: dark)' rel='apple-touch-icon' sizes='180x180' href='/favicons/dark/apple-icon-180x180.png' />
                    <link media='(prefers-color-scheme: light)' rel='icon' type='image/png' sizes='192x192' href='/favicons/light/android-icon-192x192.png' />
                    <link media='(prefers-color-scheme: dark)' rel='icon' type='image/png' sizes='192x192' href='/favicons/dark/android-icon-192x192.png' />
                    <link media='(prefers-color-scheme: light)' rel='icon' type='image/png' sizes='32x32' href='/favicons/light/favicon-32x32.png' />
                    <link media='(prefers-color-scheme: dark)' rel='icon' type='image/png' sizes='32x32' href='/favicons/dark/favicon-32x32.png' />
                    <link media='(prefers-color-scheme: light)' rel='icon' type='image/png' sizes='96x96' href='/favicons/light/favicon-96x96.png' />
                    <link media='(prefers-color-scheme: dark)' rel='icon' type='image/png' sizes='96x96' href='/favicons/dark/favicon-96x96.png' />
                    <link media='(prefers-color-scheme: light)' rel='icon' type='image/png' sizes='16x16' href='/favicons/light/favicon-16x16.png' />
                    <link media='(prefers-color-scheme: dark)' rel='icon' type='image/png' sizes='16x16' href='/favicons/dark/favicon-16x16.png' />
                    <link media='(prefers-color-scheme: dark)' rel='manifest' href='/favicons/dark/manifest.json' />
                    <link media='(prefers-color-scheme: light)' rel='manifest' href='/favicons/light/manifest.json' />
                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta name='msapplication-TileImage' content='/favicons/light/ms-icon-144x144.png' />
                    <meta name='theme-color' content='#ffffff' />
                </head>
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
