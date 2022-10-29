import AOS from 'aos'
AOS.init();


const Movie = () => {
  return (
    <div className="flex min-h-[100vh] h-[100%] 992max:px-[2rem] BG">
      <div className="m-auto  w-[65%] py-[2.5rem] 1024max:w-[80%] grid gap-[.3rem] pt-[5rem]">
        <div className=" font-bold  " data-aos="fade-down" data-aos-delay="900">
          <h1 className="text-2xl 640max:text-xl text-white tula">100 Tula Para Kay Stella</h1>
        </div>
        <iframe
          data-aos="fade-down"
          data-aos-delay="800"
          className="Watch h-[auto] w-[100%]  aspect-video  rounded-[17.5px]  active:mb-[3rem] hover: transition-all"
          src="https://www.youtube.com/embed/xNGu4BnttVY?rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Movie