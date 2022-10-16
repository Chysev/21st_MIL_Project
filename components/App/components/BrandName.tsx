import DisneFlix from '../../../public/img/DisneFlix.png'

const BrandName = () => {
    return (
        <picture>
            <img src={DisneFlix.src} className="h-[3.4rem] mt-[5px]" alt="" />
        </picture>
    )
}

export default BrandName