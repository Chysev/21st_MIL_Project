import dynamic from "next/dynamic"
import AOS from 'aos'
AOS.init();

// Components
const Stella = dynamic(() => import('./Stella'), { ssr: false })
const Fidel = dynamic(() => import('./Fidel'), { ssr: false })
const Fidel_Dad = dynamic(() => import('./Fidel_Dad'), { ssr: false })
const Sol = dynamic(() => import('./Sol'), { ssr: false })
const Danica = dynamic(() => import('./Danica'), { ssr: false })
const Stella_Sister = dynamic(() => import("./Stella_Sister"), { ssr: false })


const grpCards_1 = () => {
    return (
        <div
            className="grid grid-cols-3 768max:grid-cols-2 480max:grid-cols-1 gap-[2rem]" >

            <div
                data-aos-delay="800"
                data-aos="fade-down">
                <Stella />
            </div>

            <div
                data-aos-delay="900"
                data-aos="fade-down">
                <Fidel />
            </div>

            <div
                data-aos-delay="1000"
                data-aos="fade-down">
                <Fidel_Dad />
            </div>

            <div
                data-aos-delay="1000"
                data-aos="fade-down">
                <Sol />
            </div>

            <div
                data-aos-delay="1000"
                data-aos="fade-down">
                <Danica />
            </div>

            <div
                data-aos-delay="1000"
                data-aos="fade-down"
            >
                <Stella_Sister />
            </div>

        </div>
    )
}

export default grpCards_1