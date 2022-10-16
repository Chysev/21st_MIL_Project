import dynamic from "next/dynamic"

// Components
const Stella = dynamic(() => import('./Stella'), { ssr: false })


const grpCards_2 = () => {
    return (
        <div className="grid grid-cols-3 768max:grid-cols-2 480max:grid-cols-1 gap-[2rem]" >
            <div
                data-aos-delay="800"
                data-aos="fade-down">
                <Stella />
            </div>

            <div
                data-aos-delay="900"
                data-aos="fade-down">
                <Stella />
            </div>

            <div
                data-aos-delay="1000"
                data-aos="fade-down">
                <Stella />
            </div>

            <div
                data-aos-delay="800"
                data-aos="fade-down">
                <Stella />
            </div>
        </div>
    )
}

export default grpCards_2