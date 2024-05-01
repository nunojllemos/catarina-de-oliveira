import About from '@/components/Sections/About'
import Contacts from '@/components/Sections/Contacts'
import Hero from '@/components/Sections/Hero'
import Partners from '@/components/Sections/Partners'
import Plans from '@/components/Sections/Plans'
import Services from '@/components/Sections/Services'

export default function Home() {
    return (
        <>
            <Hero />
            <Partners />
            <About />
            <Services />
            <Plans />
            <Contacts />
        </>
    )
}
