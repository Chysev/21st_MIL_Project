// Component
import Poster from '../../public/img/Background2.png'

const Layer2 = () => {
    return (
        <div
            id='#Trailer'
            className="flex bg-[#1d2847] min-h-[100vh] h-[100%]">
            <div className="flex m-auto justify-center px-[20px] py-auto max-w-[1200px] w-[1200px]">
                <picture className='1290max:px-[10px] 1290max:py-[1rem]'>
                    <img src={Poster.src} className="rounded-[12px] card  transition-all cursor-pointer Poster" alt="" />
                </picture>
            </div>
        </div>
    )
}

export default Layer2