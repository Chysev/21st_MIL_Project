import AOS from 'aos'
AOS.init();


const RoleList = () => {
    return (
        <div className="grid grid-cols-4 768max:grid-cols-2 768max:pb-[2rem] gap-[2rem]">

            {/* Director */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="font-bold text-2xl Title">Directors</h1>
                <h2 className="text-[18px]">Mark Amiel</h2>
                <h2 className="text-[18px]">Ashlee Dela Cruz</h2>
            </div>

            {/* Video Editor */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="font-bold text-2xl Title">Video Editors</h1>
                <h2 className="text-[18px]">Mark Amiel</h2>
                <h2 className="text-[18px]">Reign Beato</h2>

            </div>

            {/* Script Writers */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="font-bold text-2xl Title">Script Writers</h1>
                <h2 className="text-[18px]">Lavhinia Basillo</h2>
                <h2 className="text-[18px]">Ashlee Dela Cruz</h2>
            </div>

            {/* Poster */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="font-bold text-2xl Title">Designers</h1>
                <h2 className="text-[18px]">Reign Beato</h2>
                <h2 className="text-[18px]">Ashlee Dela Cruz</h2>
            </div>

            {/* Website Developer */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="font-bold text-2xl Title">Website Developer</h1>
                <h2 className="text-[18px]">John Layda</h2>
            </div>

            {/* Cinematics  */}
            <div className="text-[#a2afd1] ">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[5rem]" />
                <h1 className="font-bold text-2xl Title">Cinematics</h1>
                <h2 className="text-[18px]">Dave Siapno</h2>
                <h2 className="text-[18px]">Dominic Anota</h2>
                <h2 className="text-[18px]">Myles Bagang</h2>
                <h2 className="text-[18px]">Nicolo Luce</h2>
            </div>
        </div>
    )
}

export default RoleList