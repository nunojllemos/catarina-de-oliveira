import React from 'react'
import Grid from '../Grid'
import MessageForm from '../Forms/MessageForm'
import CallMeForm from '../Forms/CallMeForm'

const Contacts = () => {
    return (
        <section id='contactos' className='py-16 scroll-m-16'>
            <Grid>
                <div className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 xl:col-span-5 xl:col-start-2'>
                    <MessageForm />
                </div>
                <div className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-1 xl:col-span-1 xl:col-start-7 flex justify-center'>
                    <div className='h-px w-full my-16 lg:h-auto lg:w-px bg-rouge/50'></div>
                </div>
                <div className='col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 xl:col-span-4 xl:col-start-8'>
                    <CallMeForm />
                </div>
            </Grid>
        </section>
    )
}

export default Contacts
