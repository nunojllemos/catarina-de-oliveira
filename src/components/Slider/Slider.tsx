'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'

const Slider = () => {
    const images = [
        {
            filename: 'photo-0.jpg',
            alt: 'Foto da Catarina de Oliveira',
        },
        {
            filename: 'photo-1.jpg',
            alt: 'Foto da Catarina de Oliveira',
        },
        {
            filename: 'photo-2.jpg',
            alt: 'Foto da Catarina de Oliveira',
        },
        {
            filename: 'photo-3.jpg',
            alt: 'Foto da Catarina de Oliveira',
        },
        {
            filename: 'photo-4.jpg',
            alt: 'Foto da Catarina de Oliveira',
        },
        {
            filename: 'photo-5.jpg',
            alt: 'Foto da Catarina de Oliveira',
        },
        {
            filename: 'photo-6.jpg',
            alt: 'Foto da Catarina de Oliveira',
        },
    ]

    const swiperOptions = {
        autoplay: {
            delay: 3750,
            disableOnInteraction: true,
        },
        className: 'h-full',
        loop: true,
        modules: [Autoplay],
        navigation: true,
        speed: 700,
    }

    return (
        <Swiper {...swiperOptions}>
            {images.map(image => (
                <SwiperSlide key={image.filename}>
                    <Image
                        sizes='100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 500px'
                        alt={image.alt}
                        src={`/photos/${image.filename}`}
                        className='w-full object-cover object-top'
                        fill={true}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
