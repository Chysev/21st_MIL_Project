import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

// Component
import FidelDadImg from '../../public/img/Fidel_Dad.jpg'


const Fidel_Dad = () => {

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
                    <img src={FidelDadImg.src} className="rounded-[12px]" alt="" />
                </picture>

                <div className='flex gap-[0.8rem] flex-col '>
                    <h1 className='pt-[1rem] text-2xl'>Fidel's Dad</h1>

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
                    <img src={FidelDadImg.src} className="rounded-[12px]" alt="" />
                </picture>


                <div className='flex gap-[0.8rem] flex-col '>
                    <p className='pt-[1rem] text-2xl'>I am Fidel's Dad</p>

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

export default Fidel_Dad