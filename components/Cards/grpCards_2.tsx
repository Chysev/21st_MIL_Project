import dynamic from "next/dynamic"
import AOS from 'aos'
AOS.init();

// Components
const Barloza = dynamic(() => import('./Barloza'), { ssr: false })
const Chuck = dynamic(() => import('./Chuck'), { ssr: false })
const Barrie = dynamic(() => import('./Barrie'), { ssr: false })
const Hunter = dynamic(() => import('./Hunter'), { ssr: false })
const Von = dynamic(() => import('./Von'), { ssr: false })


const grpCards_2 = () => {
    return (
        <div className="grid grid-cols-3 768max:grid-cols-2 480max:grid-cols-1 gap-[2rem]" >
            <div
                data-aos-delay="800"
                data-aos="fade-down">
                <Barloza />
            </div>

            <div
                data-aos-delay="900"
                data-aos="fade-down">
                <Chuck />
            </div>

            <div
                data-aos-delay="1000"
                data-aos="fade-down">
                <Hunter />
            </div>

            <div
                data-aos-delay="800"
                data-aos="fade-down">
                <Barrie />
            </div>

            <div
                data-aos-delay="800"
                data-aos="fade-down">
                <Von />
            </div>
        </div>
    )
}

export default grpCards_2