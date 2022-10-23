import dynamic from "next/dynamic"


// Dynamix Components
const RoleList = dynamic(() => import("../components/About/RoleList"), { ssr: false })
const AboutDescription = dynamic(() => import("../components/About/AboutDescription"), { ssr: false })

const about = () => {
    return (
        <>
            <title>PINOY TAPE | ABOUT</title>

            <div className="BG flex min-h-[100vh] h-[100%]">

                <div className="flex flex-col gap-[3rem] justify-center m-auto max-w-[1200px] px-[20px] py-auto w-[1200px]">

                    <AboutDescription />

                    <RoleList />
                </div>

            </div>
        </>
    )
}

export default about