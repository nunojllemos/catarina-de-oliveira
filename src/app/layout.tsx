import '@/app/globals.css'
import { Lato } from 'next/font/google'
import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SearchContextProvider from '@/context/SearchContext'
import FacebookIcon from '@/components/Icons/FacebookIcon'
import InstagramIcon from '@/components/Icons/InstagramIcon'

const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] })

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
                        {process.env.NEXT_PUBLIC_ENVIRONENT === 'prod' ? (
                            <>
                                <Alert />
                                <Navigation />
                                <main className='flex-grow'>{children}</main>
                                <Footer />
                            </>
                        ) : (
                            <main className='p-6 md:p-12 flex items-center justify-center min-h-screen text-white bg-rouge'>
                                <div className='grid grid-cols-12 gap-x-8'>
                                    <div className='col-span-12 md:col-span-8 col-start-1 md:col-start-2'>
                                        <h1 className='text-3xl md:text-5xl font-semibold'>
                                            Olá 👋🏼 <br />O nosso site está em construção.
                                        </h1>
                                        <p className='mt-12 md:mt-24 md:text-xl'>Lamentamos o incómodo causado 🙏🏼</p>

                                        <div className='border-t border-slate-200 mt-12'></div>

                                        <div className='mt-8'>
                                            <span className='font-bold'>E:</span> <a href='mailto:info@catarinadeoliveira.pt'>info@catarinadeoliveira.pt</a>
                                        </div>
                                        <div className='mt-2'>
                                            <span className='font-bold'>T:</span> <a href='tel:917976840'>917 976 840</a>
                                        </div>
                                        <menu className='flex items-center gap-x-4 mt-12 md:mt-24'>
                                            <li>
                                                <a
                                                    className='hover:opacity-50 transition-opacity duration-300'
                                                    href='https://www.facebook.com/profile.php?id=61556658309260'
                                                    target='_blank'
                                                >
                                                    <FacebookIcon />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='hover:opacity-50 transition-opacity duration-300'
                                                    href='https://www.instagram.com/catarinadeoliveira.pt'
                                                    target='_blank'
                                                >
                                                    <InstagramIcon />
                                                </a>
                                            </li>
                                        </menu>
                                    </div>
                                </div>
                            </main>
                        )}
                    </div>
                </body>
            </html>
        </SearchContextProvider>
    )
}
