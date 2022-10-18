import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import Modal from 'react-modal'

// Component
import HunterImg from '../../public/img/Hunter.jpg'


const Hunter = () => {

    // SetFunction
    const [isFlipped, setIsFlipped] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false)

    // Modal Function
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    // CardFlip Function
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


    // Styles for Modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '500px'
        },
    };
    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="vertical">

            {/* Front */}

            <div className="card flex flex-col items-center rounded-[12px] p-5 text-white">

                <picture>
                    <img src={HunterImg.src} className="rounded-[12px]" alt="" />
                </picture>

                <div className='flex gap-[0.8rem] flex-col '>
                    <h1 className='pt-[1rem] text-2xl m-auto'>Hunter</h1>

                    <div className='flex gap-[1rem] m-auto'>
                        <button
                            onClick={handleClick}
                            className=" inline-block rounded-md border border-solid border-[#01d293] bg-[transparent] hover:opacity-[0.8] px-6 py-[0.5rem] text-white ">
                            About Me
                        </button>

                        <button
                            onClick={openModal}
                            className=" inline-block rounded-md border border-solid border-[#01d293] bg-[transparent] hover:opacity-[0.8] px-6 py-[0.5rem] text-white ">
                            View
                        </button>
                    </div>

                </div>

                <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={closeModal} style={customStyles}>
                    <picture>
                        <img src={HunterImg.src} className="rounded-[12px] h-[25rem]" alt="" />
                    </picture>
                    <button
                        onClick={closeModal}
                        className="mt-[1rem] inline-block rounded-md border border-solid border-[#01d293] bg-[transparent] hover:opacity-[0.8] px-6 py-[0.5rem] text-black">
                        Close
                    </button>
                </Modal>

            </div>

            {/* Back */}

            <div className="card flex flex-col items-center rounded-[12px] p-5 text-white">

                <picture>
                    <img src={HunterImg.src} className="rounded-[12px]" alt="" />
                </picture>


                <div className='flex gap-[0.8rem] flex-col '>
                    <p className='pt-[1rem] text-2xl'>I am Hunter</p>

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

export default Hunter