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
                    <div className='flex justify-between'>
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
                                <a className='hover:opacity-50 transition-opacity duration-300' href='' target='_blank'>
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
