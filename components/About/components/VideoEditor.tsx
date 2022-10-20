import AOS from 'aos'
AOS.init()

const VideoEditor = () => {
    return (
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
    )
}

export default VideoEditor