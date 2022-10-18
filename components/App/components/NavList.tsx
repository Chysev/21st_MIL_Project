import Link from "next/link"
import React, { useState } from 'react'

// Components
import Dev from "../../Buttons/Dev"


const NavList = () => {

    const [open, setOpen] = useState(false)


    return (
        <>

            <button
                onClick={() => setOpen(!open)}
                name={open ? "close" : "menu"}
                className="Button  z-[9999] hidden transition-all 768max:block">

                {/* NavIcon */}
                <i className={`z-[999] text-white fa-solid fa-bars-staggered transition-all 
                ${open ? "768max:rotate-0" : "768max:rotate-180"}`}></i>

            </button>


            <nav className={`NavRowList 768max:fixed ${open ? "768max:translate-x-0" : "768max:translate-x-full"}`}>

                <ul className="flex items-center gap-[2.8rem] 768max:fixed 768max:my-auto 
                768max:mx-[5rem] 768max:flex-col 768max:items-center 768max:p-[min(20vh,_10rem)_2em]">

                    <li className="flex items-center gap-2 hover:text-[red] text-white cursor-pointer">
                        <i className="fa-solid fa-house text-[16px]"></i>
                        <Link href="/">
                            <a className="text-[16px]">
                                Home
                            </a>
                        </Link>
                    </li>


                    <li className="flex items-center gap-2 hover:text-[red] text-white cursor-pointer">
                        <i className="fa-solid fa-circle-exclamation text-[16px]"></i>
                        <Link href="/about">
                            <a className="text-[16px]">
                                About
                            </a>
                        </Link>
                    </li>

                    <li className="flex items-center gap-2 hover:text-[red] text-white cursor-pointer">
                        <i className="fa-solid fa-play text-[16px]"></i>
                        <Link href="/trailer">
                            <a className="text-[16px]">
                                Trailer
                            </a>
                        </Link>
                    </li>

                    <li className="flex items-center gap-2 hover:text-[red] text-white cursor-pointer">
                        <i className="fa-solid fa-clapperboard text-[16px]"></i>
                        <Link href="/watch">
                            <a className="text-[16px]">
                                Watch
                            </a>
                        </Link>
                    </li>

                    <div className="768min:hidden">
                        <Dev />
                    </div>

                </ul>
            </nav>
        </>
    )
}

export default NavList