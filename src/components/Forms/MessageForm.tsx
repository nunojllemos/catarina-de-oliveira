'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Text from '../Text'
import Button from '../Button'

const MessageForm = () => {
    const [wasMessageSent, setWasMessageSent] = useState<boolean>(false)
    const form = useRef<HTMLFormElement>(null)
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || ''

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs
            .sendForm(serviceId, templateId, form.current as HTMLFormElement, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                    setWasMessageSent(true)
                },
                error => {
                    console.log('FAILED...', error.text)
                    setWasMessageSent(false)
                }
            )
    }

    return (
        <div>
            <h3 className='font-bold text-2xl'>{'☎️'} Contactos</h3>
            <div className='flex flex-col gap-y-1 mt-4'>
                <Text>
                    <span className='font-bold'>E:</span> <a href='mailto:info@catarinadeoliveira.pt'>info@catarinadeoliveira.pt</a>
                </Text>
                <Text>
                    <span className='font-bold'>T:</span> <a href='tel:917976840'>917 976 840</a>
                </Text>
            </div>
            <form className='mt-16 flex gap-6 flex-col relative' ref={form} onSubmit={sendEmail}>
                {wasMessageSent && (
                    <div className='absolute w-full h-full bg-white/70 flex justify-center'>
                        <div className='py-2 px-6 bg-white mt-16 rounded-md border border-rouge h-max'>
                            Obrigado pelo contacto!
                            <br />
                            Espero responder-lhe em breve 🐞
                        </div>
                    </div>
                )}
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label className='text-sm text-gray/80' htmlFor='name'>
                            Nome
                        </label>
                        <input required id='name' className='border border-light-gray py-1 px-2 rounded-[5px]' type='text' name='name' />
                    </div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label className='text-sm text-gray/80' htmlFor='last_name'>
                            Apelido
                        </label>
                        <input id='last_name' className='border border-light-gray py-1 px-2 rounded-[5px]' type='text' name='last_name' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label className='text-sm text-gray/80' htmlFor='phone'>
                            Telefone
                        </label>
                        <input required id='phone' className='border border-light-gray py-1 px-2 rounded-[5px]' type='text' name='phone' />
                    </div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label className='text-sm text-gray/80' htmlFor='email'>
                            Email
                        </label>
                        <input required id='email' className='border border-light-gray py-1 px-2 rounded-[5px]' type='email' name='email' />
                    </div>
                </div>
                <div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label className='text-sm text-gray/80' htmlFor='company'>
                            Empresa
                        </label>
                        <input id='company' className='border border-light-gray py-1 px-2 rounded-[5px]' type='text' name='company' />
                    </div>
                </div>
                <div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label className='text-sm text-gray/80' htmlFor='message'>
                            Mensagem
                        </label>
                        <textarea
                            required
                            id='message'
                            className='border border-light-gray py-1 px-2 rounded-[5px] resize-none leading-snug h-[calc(1.45_*_16px_*_4)]'
                            name='message'
                        />
                    </div>
                </div>

                <div className='flex justify-end'>
                    <Button isLink={false} className='w-full md:w-max'>
                        Enviar mensagem
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default MessageForm
