import React from 'react'
import Grid from '../Grid'

const Contacts = () => {
    return (
        <section className='py-16'>
            <Grid>
                <div className='col-span-5 col-start-2'>1</div>
                <div className='col-span-1 col-start-7 flex justify-center'>
                    <div className='w-px bg-rouge/50'></div>
                </div>
                <div className='col-span-4 col-start-8'>3</div>
            </Grid>
        </section>
    )
}

export default Contacts
