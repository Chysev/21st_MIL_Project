import dynamic from "next/dynamic"


// Dynamic Component
const NotAvailable = dynamic(() => import("../components/503/NotAvailable"))

const trailer = () => {

    return (
        <>
            <title>PINOY TAPE | Trailer</title>
            <NotAvailable />
        </>
    )
}

export default trailer