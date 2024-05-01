import Link from 'next/link'
import Text from '@/components/Text'
import Container from '@/components/Container'

const Alert = () => {
    return (
        <div className='bg-rouge py-2'>
            <Container>
                <Text variant={'normal'} size={'sm'} position={'center'}>
                    <span className='font-semibold'>👀 Novidades: </span>
                    <Link className='underline' href='/'>
                        Como é que ganho mais visibilidade no facebook
                    </Link>
                </Text>
            </Container>
        </div>
    )
}

export default Alert
