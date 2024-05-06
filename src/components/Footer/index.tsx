import Grid from '../Grid'
import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import Text from '../Text'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='bg-rouge py-6'>
            <Grid>
                <div className='col-span-12'>
                    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between'>
                        <Text variant={'normal'} size={'sm'}>
                            {currentYear} © Todos os direitos reservados Catarina De Oliveira
                        </Text>
                        <menu className='flex items-center gap-x-4 text-white'>
                            <li>
                                <a className='hover:opacity-50 transition-opacity duration-300' href='' target='_blank'>
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a className='hover:opacity-50 transition-opacity duration-300' href='https://www.instagram.com/catarinadeoliveira.pt' target='_blank'>
                                    <InstagramIcon />
                                </a>
                            </li>
                        </menu>
                    </div>
                </div>
            </Grid>
        </footer>
    )
}

export default Footer
