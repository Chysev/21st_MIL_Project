const NotAvailable = () => {

    const date = new Date()

    const dateObjects = {
        day: date.getDate()
    }
    return (
        <div className="flex min-h-[100vh] h-[100%] 992max:px-[2rem] BG">
            <div className="m-auto 992max:items-center 992max:grid">
                <h1 className="text-2xl 992max:text-center font-[900] text-white Time">Releasing World Wide | Date: October {dateObjects.day}, 2022 </h1>
                <h2 className="text-7xl 992max:text-center 992max:text-4xl font-[900] text-white Time">October 28, 2022</h2>
                <h2 className="text-2xl 992max:text-center font-[900] text-white ml-[10rem] 992max:ml-[0] Time">100 Tula Para Kay Stella</h2>
            </div>
        </div>
    )
}

export default NotAvailable