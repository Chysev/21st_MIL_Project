import AOS from 'aos'
AOS.init();

const AboutDescription = () => {
    return (
        <div className="grid 768max:pt-[8rem] gap-[1em]">
            <svg
                data-aos="fade-down"
                data-aos-delay="1000"
                className="About-Icon svg-inline--fa fa-info h-[3rem] w-[3rem] rounded-[99px] border-4 p-[10px] text-[whitesmoke] " data-v-11d8d54d="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg=""><path fill="currentColor" d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"></path></svg>

            <div className="flex items-center gap-[1em]">
                <div
                    data-aos="fade-down"
                    className="Line2 bg-white h-[5px] rounded-[12px] w-[2rem]" />
                <h1
                    data-aos="fade-down"
                    className="text-4xl font-[900] text-[#01d293] tracking-[5px] aboutus">ABOUT US</h1>
            </div>

            <h2 className="text-[#a2afd1] leading-[30px] text-justify font-[400]">
                Disneflix is one of the best movie website that is accessible for everyone. This website is created for 100 Tula ni Stella Film Project in 21st century in the Philippines and the world and Media Information and Literacy. We are the TPSians production team, and we are dedicated to bringing you one of the best student films you have ever seen.
            </h2>
        </div>
    )
}

export default AboutDescription