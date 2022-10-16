import dynamic from "next/dynamic"
import React, { useState } from 'react'



// Components
const Stella = dynamic(() => import("../cards/Stella"), { ssr: false })
const Line = dynamic(() => import("../Icons/Line"), { ssr: false })
const First = dynamic(() => import('../cards/grpCards_1'), { ssr: false })
const Second = dynamic(() => import('../cards/grpCards_2'), { ssr: false })


const Layer3 = () => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleFirst = () => {
        setActiveTab("tab1");
    };
    const handleSecond = () => {
        setActiveTab("tab2");
    };

    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0e1630" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,186.7C672,171,768,117,864,112C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="flex flex-col bg-[#0e1630] min-h-[50vh] h-[100%]  curve">

                <div className="m-auto mb-[2rem]">
                    <h1 className="text-white text-4xl Characters">
                        Characters
                    </h1>
                    <Line />
                </div>

                <div className="flex flex-col 1290max:grid-cols-2 p-[2rem] 560max:grid-cols-1 items-center gap-[2rem] m-auto max-w-[1200px] ">

                    <div className="flex gap-2 text-white text-2xl font-bold">
                        <p onClick={handleFirst}
                            className={` cursor-pointer hover:opacity-[0.8] ${activeTab === "tab1" ? "active" : ""}`}>
                            1
                        </p>

                        <p onClick={handleSecond}
                            className={` cursor-pointer hover:opacity-[0.8] ${activeTab === "tab2" ? "active" : ""}`}>
                            2
                        </p>
                    </div>


                    <div>
                        {activeTab === "tab1" ? <First /> : <Second />}
                    </div>


                </div>

            </div>
        </>
    )
}

export default Layer3