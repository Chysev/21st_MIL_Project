import React, { useEffect, useState } from 'react'

// Components
import BrandName from "./components/BrandName"
import NavList from "./components/NavList"
import Dev from '../Buttons/Dev'

const Header = () => {

    // NavBar

    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        const navhandler = () => {
            if (window.scrollY >= 80) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }
        window.addEventListener('scroll', navhandler)
    })


    return (
        <>
            <header
                id="Header"
                className={`flex z-[99] fixed w-[100%] opacity-[0.9] ${navbar ? 'bg-[#0e1630] shadow-[_0_0_5px_black] min-h-[70px] transition-[900ms]' : ' bg-[transparent] min-h-[90px]'}`}>
                <div className=" flex justify-between max-w-[1300px] 768max:max-w-[600px] px-[2rem] w-[1300px] m-auto items-center">

                    <div className="flex items-center  992min:hidden gap-[2rem]">
                        <NavList />
                        <BrandName />
                        <div className='768max:hidden'>
                            <Dev />
                        </div>
                    </div>

                    <div className="flex items-center 992max:hidden gap-[2rem]">
                        <BrandName />
                        <NavList />
                    </div>

                    <div className='992max:hidden 1536max:px-[5rem]'>
                        <Dev />
                    </div>



                </div>
            </header>
        </>
    )
}

export default Header