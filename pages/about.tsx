// Components
import RoleList from "../components/About/RoleList"
import AboutDescription from "../components/About/AboutDescription"

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