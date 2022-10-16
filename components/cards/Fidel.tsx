import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

// Component
import FidelImg from '../../public/img/Fidel.jpg'


const Fidel = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="vertical">

            {/* Front */}

            <div className="card flex flex-col items-center rounded-[12px] p-5 text-white">

                <picture>
                    <img src={FidelImg.src} className="rounded-[12px]" alt="" />
                </picture>

                <div className='flex gap-[0.8rem] flex-col '>
                    <h1 className='pt-[1rem] text-2xl text-center'>Fidel Langsangan</h1>

                    <div className='m-auto'>
                        <button
                            onClick={handleClick}
                            className=" inline-block rounded-md border border-solid border-[#01d293] bg-[transparent] hover:opacity-[0.8] px-6 py-[0.5rem] text-white ">
                            About Me
                        </button>
                    </div>

                </div>

            </div>

            {/* Back */}

            <div className="card flex flex-col items-center rounded-[12px] p-5 text-white">

                <picture>
                    <img src={FidelImg.src} className="rounded-[12px]" alt="" />
                </picture>


                <div className='flex gap-[0.8rem] flex-col '>
                    <p className='pt-[1rem] text-2xl'>I am Fidel Langsangan</p>

                    <div className='m-auto'>
                        <button
                            onClick={handleClick}
                            className=" inline-block rounded-md border border-solid border-[#01d293] bg-[transparent] hover:opacity-[0.8] px-6 py-[0.5rem] text-white ">
                            Profile
                        </button>
                    </div>

                </div>

            </div>
        </ReactCardFlip>
    )
}

export default Fidel