import React from 'react'
import ContactIcon from '../Icons/ContactIcon'
import Item from './Item'

interface PropsTypes {
    onClick: () => void
}

const ContactsItem = ({ onClick }: PropsTypes) => {
    return (
        <Item onClick={onClick} href='/#contactos'>
            <div className='flex items-center gap-2 pl-2 xl:pl-8'>
                <ContactIcon />
                <span>Contactos</span>
            </div>
        </Item>
    )
}

export default ContactsItem
