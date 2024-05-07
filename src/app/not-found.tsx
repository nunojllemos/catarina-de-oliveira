import Button from '@/components/Button'
import Grid from '@/components/Grid'
import Text from '@/components/Text'
import React from 'react'

const NotFound = () => {
    return (
        <Grid>
            <div className='col-span-12 md:col-span-10 md:col-start-2 py-16 md:py-32'>
                <Text size='xxxl'>😢 404:</Text>
                <Text size='xxl'>Página não encontrada</Text>
                <div className='my-16 md:max-w-96'>
                    <Text>
                        Aparentemente esta página que estás a tentar aceder não existe ou foi apagada.
                        <br />
                        <br />
                        Lamentamos o incómodo ❤️‍🩹
                    </Text>
                </div>
                <Button isLink={true} href='/'>
                    🏠 Voltar ao ínicio
                </Button>
            </div>
        </Grid>
    )
}

export default NotFound
