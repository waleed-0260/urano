import React, { useEffect, useRef } from 'react'
import hero from "../../assets/hero.png"
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  const vidRef = useRef(null);
  const playbackConst = 100;

  useEffect(() => {
    const vid = vidRef.current;

    const scrollPlay = () => {
      if (vid) {
        const frameNumber = (window.pageYOffset / playbackConst);
        vid.currentTime = frameNumber;
        // console.log('Current time:', vid.currentTime); // Check if currentTime is updating
      }
      window.requestAnimationFrame(scrollPlay);
    };

    window.requestAnimationFrame(scrollPlay);

    return () => {
      window.cancelAnimationFrame(scrollPlay);
    };
  }, []);
  return (
    <div className='flex items-center justify-center w-full z-0' data-aos="fade-up" data-aos-delay="500">





      <div className='flex lg:flex-row flex-col items-center justify-around w-[90%] lg:max-w-[1200px] text-white lg:mt-0 mt-[100px]'>
        <div className='flex flex-col lg:w-[30%]'>
          <h1 className='heading lg:w-[350px] font-conthrax tracking-wide leading-8' data-aos="fade-up" data-aos-delay="500">Unlocking the power of <span className='text-[#2DBDC5]'>on-chain</span> tokenization</h1>
          <p className='textColor lg:w-[270px]' data-aos="fade-up">Urano Ecosystem is a decentralized tokenization platform, serving as a safe path for off-chain and Real World Asset (RWA) opportunities.</p>
          <button className='px-2 py-2 rounded-lg btnColor flex items-center justify-center w-[110px] mt-[30px] font-[500]'  data-aos="fade-up">Discover <MdKeyboardArrowRight /> </button>
        </div>
        <div className='relative lg:w-[60%] sm:h-[800px] h-[500px]'>
          <div className='absolute sm:top-[150px] top-[0px] left-[3vw] w-[550px] h-[550px] bg-gradient-to-b from-[#ffffff] to-[#2DBDC5] opacity-20 blur-3xl rounded-full'></div>

          <div className=" h-full w-full overflow-hidden">
            <video
              ref={vidRef}
              className=" w-full h-full object-cover"
              autoPlay={false} // Disable autoplay for scroll-based playback
              muted
              playsInline
              poster={hero}
            // preload='auto'
            // controls
            >
              <source src="/assets/Home.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero