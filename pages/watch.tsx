import dynamic from "next/dynamic"


// Dynamic Component
const NotAvailable = dynamic(() => import("../components/503/NotAvailable"))

const watch = () => {

    return (
        <>
            <title>PINOY TAPE | Watch</title>
            <NotAvailable />
        </>
    )
}

export default watch