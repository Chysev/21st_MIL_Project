import styles from '../../global/Home.module.css'

// Component
import Button from "../Buttons/Button"
import Button2 from "../Buttons/Button2"

const Layer1 = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div
            id="Home"
            className={`flex min-h-[100vh] h-[100%] ${styles.Layer}`}>
            <div className="flex mt-[18rem] mx-auto w-[1200px] max-w-[1200px] ">

                <div className="flex flex-col gap-[1.5rem]">

                    <div className="mb-[-20px]">
                        <p className="text-white ml-[3.5rem] mb-[-23px] tula-100 text-[24px] 768max:ml-[3rem] 768max:mb-[-19.4px] 1536max:ml-[4.8rem] 1024max:ml-[4.5rem] 768max:text-[17.4px]">100</p>
                        <h1 className="text-white tula text-[57px] 768max:text-[36px] 768max:pl-[1rem] 1024max:pl-[1rem] 1536max:pl-[1rem]">TULA PARA KAY STELLA</h1>
                    </div>

                    <div className="flex 420max:flex-col gap-2 ml-[1rem] items-center">

                        {/* Removed */}
                        {/*                         <div className="text-red-700 text-2xl">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div> */}

                        {/* Added */}
                        <div className="rate flex items-center">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>

                        <div>
                            <p className="text-white text-[18px] font-bold">{year} DISNEFLIX MOVIE</p>
                        </div>
                    </div>

                    <div className="ml-[2rem]">
                        <p className="text-white max-w-[930px] leading-[30px] pr-[2rem] description">
                            Fidel Lansangan and Stella Puno first crossed paths in 2004,
                            when they were both psychology bachelor's degree candidates
                            in Pampanga. Despite having very different personalities—Stella
                            is a rocker with a tough and self-assured attitude who prefers
                            to jam with her band rather than do her academics, while Fidel
                            is an honor student with a speech impediment who loves poetry—they
                            became friends. Fidel starts to write poetry for Stella to show his
                            love, but he lacks the self-assurance to present them to her.
                            Stella had a number of boyfriends while working toward her objective
                            of obtaining a recording contract. The film's plot covers four years
                            of Fidel and Stella's college experience and centers on the question
                            of whether Fidel will ever graduate.
                        </p>
                    </div>

                    <div className="flex ml-[2rem] mt-[1rem] 1024max:pb-[2rem] gap-[0.8rem]">
                        <Button>
                            <i className="mr-2 fa-solid fa-play"></i>
                            Play
                        </Button>

                        <Button2>
                            + Trailer
                        </Button2>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Layer1