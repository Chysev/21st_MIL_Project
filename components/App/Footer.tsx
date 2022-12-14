const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()

    return (
        <footer className="flex">
            <h1 className="m-auto text-center py-[10px] px-[10px] text-[#a2afd1]">
                © Copyright {year} - Created by PinoyTape Production.
            </h1>
        </footer>
    )
}

export default Footer