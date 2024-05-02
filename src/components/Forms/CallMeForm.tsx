'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../Button'

const CallMeForm = () => {
    const [wasMessageSent, setWasMessageSent] = useState<boolean>(false)
    const form = useRef<HTMLFormElement>(null)
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAIL_CALL_ME_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || ''

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs
            .sendForm(serviceId, templateId, form.current as HTMLFormElement, {
                publicKey: publicKey,
            })
            .then(
                () => setWasMessageSent(true),
                () => setWasMessageSent(false)
            )
    }

    return (
        <div>
            <h3 className='font-bold text-2xl'>😁 Prefiro que me contactem</h3>
            <form className='mt-16 flex gap-6 flex-col relative' ref={form} onSubmit={sendEmail}>
                {wasMessageSent && (
                    <div className='absolute w-full h-full bg-white/70 flex justify-center'>
                        <div className='py-2 px-6 bg-white mt-16 rounded-md border border-rouge h-max'>
                            Obrigado pelo interesse.
                            <br />
                            Espero entrar em contacto brevemente 🐞
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
                <div className='flex flex-col md:flex-row flex-col gap-4'>
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

                <div className='flex justify-end'>
                    <Button isLink={false} className='w-full md:w-max'>
                        Enviar contactos
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CallMeForm
