// Component
import { useEffect, useState } from 'react'
import PinoyTape from '../../../public/img/PinoyTape.png'

const BrandName = () => {

    const [Logo, setLogo] = useState(false)

    useEffect(() => {
        const Resize = () => {
            if (window.scrollY >= 80) {
                setLogo(true)
            } else {
                setLogo(false)
            }
        }

        window.addEventListener('scroll', Resize)
    })

    return (
        <picture>
            <img id="Logo" src={PinoyTape.src} className={`h-[3.4rem] mt-[5px] ${Logo ? 'h-[5rem] ' : 'h-[3.4rem] '}`} alt="" />
        </picture>
    )
}

export default BrandName