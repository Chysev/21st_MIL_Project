import AOS from 'aos'
AOS.init()


const RoleList = () => {
    return (
        <div className="grid grid-cols-4 768max:grid-cols-2 768max:pb-[2rem] gap-[4rem]">

            {/* Director */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="flex items-center gap-2 font-bold text-2xl Title">
                    <i className="fa-solid fa-clapperboard text-[16px]"></i>
                    Directors
                </h1>
                <h2 className="text-[18px]">Mark Amiel</h2>
                <h2 className="text-[18px]">Ashlee Dela Cruz</h2>
            </div>

            {/* Video Editor */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="flex items-center gap-2 font-bold text-2xl Title">
                    <i className="fa-solid fa-video text-[16px]"></i>
                    Video Editors
                </h1>
                <h2 className="text-[18px]">Mark Amiel</h2>
                <h2 className="text-[18px]">Reign Beato</h2>

            </div>

            {/* Script Writers */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="flex items-center gap-2 font-bold text-2xl Title">
                    <i className="fa-solid fa-scroll text-[16px]"></i>
                    Script Writers
                </h1>
                <h2 className="text-[18px]">Lavhinia Basillo</h2>
                <h2 className="text-[18px]">Ashlee Dela Cruz</h2>
            </div>

            {/* Poster */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="flex items-center gap-2 font-bold text-2xl Title">
                    <i className="fa-solid fa-paintbrush text-[16px]"></i>
                    Designers
                </h1>
                <h2 className="text-[18px]">Reign Beato</h2>
                <h2 className="text-[18px]">Ashlee Dela Cruz</h2>
            </div>

            {/* Website Developer */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="flex items-center gap-2 font-bold text-2xl Title">
                    <i className="fa-solid fa-code text-[16px]"></i>
                    Website Developer
                </h1>
                <h2 className="text-[18px]">John Layda</h2>
                <h2 className="text-[18px]">Nicolo Luce (Designer)</h2>

            </div>

            {/* Cinematics  */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="flex items-center gap-2 font-bold text-2xl Title">
                    <i className="fa-solid fa-video text-[16px]"></i>
                    Cinematics
                </h1>
                <h2 className="text-[18px]">Dominic Anota</h2>
                <h2 className="text-[18px]">Myles Bagang</h2>
                <h2 className="text-[18px]">Dave Siapno</h2>
                <h2 className="text-[18px]">John Layda</h2>
            </div>

            {/* Costumes & Props  */}
            <div className="text-[#a2afd1]">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="flex items-center gap-2 font-bold text-2xl Title">
                    <i className="fa-solid fa-shirt text-[16px]"></i>
                    Props Designers
                </h1>
                <h2 className="text-[18px]">Dave Siapno</h2>
                <h2 className="text-[18px]">Myles Bagang</h2>
            </div>
        </div>
    )
}

export default RoleList