
const Hero = ({heading, text}) => {

  return (
    <div className='flex flex-col items-center justify-center mt-[200px] gap-4 mb-[100px] max-w-[1200px]' >
        <div className='absolute md:top-[-250px] top-[-400px] w-[350px] h-[350px] bg-gradient-to-b from-[#2DBDC5] to-[#16EAC0] opacity-20 blur-3xl rounded-full'></div>
        <p className="text-2xl bg-gradient-to-b from-[#2DBDC5] to-[#16EAC0] text-transparent bg-clip-text md:mt-0 mt-[-80px]" data-aos="fade-up">
        Coming Soon</p>
            <h1 className='heading md:w-[90%] text-center font-conthrax text-white' data-aos="fade-up" data-aos-delay="200">{heading}</h1>
            <p className='textColor md:w-[60%] text-center p-4' data-aos="fade-up" data-aos-delay="500">{text}</p>
    </div>
  )
}

export default Hero