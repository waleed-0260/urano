
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';


const Roadmap = () => {
  const [progress, setProgress] = useState(10); // Store progress percentage

  const handleSlideChange = (swiper) => {
    // Calculate the progress as a percentage
    const progressPercentage = ((swiper.activeIndex + 1) / swiper.slides.length) * 150;
    setProgress(progressPercentage)
  };

  return (
    <div className='w-[95%] lg:max-w-[1300px] flex flex-col items-center justify-center text-white my-10 relative' >
        <div className='absolute top-[-250px] left-[-300px]  w-[350px] h-[450px] bg-gradient-to-b from-[#ffffff] to-[#2DBDC5] opacity-20 blur-3xl rounded-full'></div>
        <p className='heading text-center font-bold font-conthrax' data-aos="fade-up">Roadmap</p>
        {/* <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-[40px]'> */}
        {/* <div className='relative'> */}

        <Swiper data-aos="fade-up" data-aos-delay="400"
           modules={[Autoplay]}
         autoplay={{
          delay: 1000, // Adjust delay as needed (in milliseconds)
          disableOnInteraction: false, // Autoplay will not stop on user interaction
        }}
        className='w-full py-4 mt-5' slidesPerView={4} spaceBetween={7} breakpoints={{
          // when window width is >= 320px
          100: {
            slidesPerView: 1,
            // spaceBetween: 10
          },
          // when window width is >= 480px
          600: {
            slidesPerView: 2,
            // spaceBetween: 20
          },
          // when window width is >= 640px
          750: {
            slidesPerView: 3,
            // spaceBetween: 30
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            // spaceBetween: 30
          }
        }}
        loop={true}
        onSlideChange={handleSlideChange} // Attach slide change event
        
        >
            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none' >
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[2px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw]sm:w-auto">

                <p className='textColor'>2023 Q1</p>
                <p className='text-md text-center font-conthrax mt-2'>Establishment of Urano Foundation</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2023 Q2</p>
                <p className='text-md text-center font-conthrax mt-2'>Urano Ecosystem registers in European registration of virtual currency activities (obtaining the tokenization license)</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2024 - Q1</p>
                <p className='text-md text-center font-conthrax mt-2'>Expansion of the team and rebranding initiatives</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2024 - Q3</p>
                <p className='text-md text-center font-conthrax mt-2'>Launch of the official website</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none relative'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[2px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2024 Q4</p>
                <p className='text-md text-center font-conthrax mt-2'>Initation of speed/pre-sale phase</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2024 Q4</p>
                <p className='text-md text-center font-conthrax mt-2'>Formation of institutional partnership</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2025 - Q1</p>
                <p className='text-md text-center font-conthrax mt-2'>Release of the Urano DApp</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2025 Q1</p>
                <p className='text-md text-center font-conthrax mt-2'>Launch of the Urano Token</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>


            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2025 - Q1</p>
                <p className='text-md text-center font-conthrax mt-2'>First Real World Asset (RWA) tokenization sale</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2025 Q2</p>
                <p className='text-md text-center font-conthrax mt-2'>Launch of the Urano LaunchPad</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2025 - Q2/Q3</p>
                <p className='text-md text-center font-conthrax mt-2'>Acquition of Dubai-USA Virtual Currency Activities License</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>

            <SwiperSlide className='flex flex-row items-center justify-between gap-2 cursor-grab select-none'>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#0f0f0f] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.4)] border-[1px] border-[#27292b] px-2 md:h-[200px] sm:h-[320px] h-[300px] w-[90vw] sm:w-auto">

                <p className='textColor'>2025 - Q3/Q4</p>
                <p className='text-md text-center font-conthrax mt-2'>Intergation with a European Stock Exchange</p>
              </div>
                <p className="text-sm">
                <MdKeyboardArrowRight/>
                </p>
            </SwiperSlide>
            </Swiper>
          {/* </div> */}


        {/* </div> */}
        <div className="w-[65%] h-[6px] bg-[#161616] rounded-full relative overflow-hidden mt-6">
        <div className="h-full bg-[#16EAC0] shadow-lg relative overflow-hidden rounded-full" style={{ width: `${progress}%` }}>
        </div>
      </div>

    </div>
  )
}

export default Roadmap