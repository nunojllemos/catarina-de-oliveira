import React from 'react'
import ContactIcon from '../Icons/ContactIcon'
import Item from './Item'

const ContactsItem = () => {
    return (
        <div className='flex items-center gap-2 pl-8'>
            <ContactIcon />
            <Item href='/#contactos'>Contactos</Item>
        </div>
    )
}

export default ContactsItem
