import dynamic from "next/dynamic"

// Component
import NotAvailable from "../components/503/NotAvailable"
const Movie = dynamic(() => import("../components/Watch/Movie"), { ssr: false })


const watch = () => {

    return (
        <>
            <title>PINOY TAPE | Watch</title>
            <Movie />
        </>
    )
}

export default watch