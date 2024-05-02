import React from 'react'
import ContactIcon from '../Icons/ContactIcon'
import Item from './Item'

interface PropsTypes {
    onClick: () => void
}

const ContactsItem = ({ onClick }: PropsTypes) => {
    return (
        <div className='flex items-center gap-2 pl-2 xl:pl-8'>
            <ContactIcon />
            <Item onClick={onClick} href='/#contactos'>
                Contactos
            </Item>
        </div>
    )
}

export default ContactsItem
