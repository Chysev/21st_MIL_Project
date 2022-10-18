import React, { useState } from 'react'
import Link from 'next/link'

const Dev = () => {

    let [open, setOpen] = useState(true)

    const Links = {
        GitHub: "https://github.com/Chysev/21st_MIL_Project",
        Contents: "https://drive.google.com"
    }

    return (
        <div>

            <div>
                <h1
                    className='
                            text-white cursor-pointer bg-[#0e0e23] hover:opacity-[0.5]  rounded-[7.5px] py-[8px] px-[20px]'
                    onClick={() => setOpen(!open)}>
                    Devs
                </h1>
            </div>

            <div className={`
                    fixed
                    flex
                    ${open ? "hidden" : "translate-x-[-65px"}`}>


                <div
                    className=" mt-[10px] pt-2 rounded-[7.5px] m-auto flex bg-[#0e0e23] px-6 bg-lightsurface  dark:bg-darksurface items-center gap-[10px] pb-2 flex-col text-[white]">

                    <Link
                        href={Links.GitHub}>
                        <a className='hover:opacity-[0.7]'>Source Code</a>
                    </Link>

                    <Link
                        href={Links.Contents}>
                        <a className='hover:opacity-[0.7]'>Contents</a>
                    </Link>

                </div>


            </div>


        </div>
    )
}

export default Dev