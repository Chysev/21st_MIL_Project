import dynamic from "next/dynamic"


// Dynamic Component
const NotAvailable = dynamic(() => import("../components/503/NotAvailable"))
import Movie from "../components/Watch/Movie"

const watch = () => {

    return (
        <>
            <title>PINOY TAPE | Watch</title>
            <Movie />
        </>
    )
}

export default watch