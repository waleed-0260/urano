import aboutBg from "../../assets/aboutBg.png"

const Hero = () => {
  return (
    <div className='flex items-center justify-center w-full bg-black mt-[200px]' data-aos="fade-up">

    <div className='flex flex-col items-center justify-center w-[90%] lg:max-w-[1200px] text-white relative '>
    {/* <div className='absolute  w-[350px] h-[350px] bg-white opacity-20 blur-3xl rounded-full'></div> */}
        <div className='flex flex-col items-center justify-center'>
        <div className='absolute sm:top-[-350px] top-[-450px]  w-[450px] h-[450px] bg-gradient-to-b from-[#2DBDC5] to-[#16EAC0] opacity-20 blur-3xl rounded-full'></div>
        <p className="text-2xl bg-gradient-to-b from-[#2DBDC5] to-[#16EAC0] text-transparent bg-clip-text md:mt-0 mt-[-80px]">
        About Us</p>
            <h1 className='heading md:w-[90%] text-center font-conthrax'>Urano Ecosystem is a <span className='text-[#2DBDC5]'>decentralized</span> tokenization platform</h1>
            <p className='text-[#ADADAD] md:w-[60%] text-center mt-3'>Urano Ecosystem serves as a safe path for off-chain and Real World Asset (RWA) opportunities such as real estate, finance, and art to take shape on-chain. This platform provides a new way for people to interact with their investments in a more scalable, democratic, and transparent manner.</p>
        </div>
        <div className='relative'>
  {/* Blurry Background */}


  {/* Planet Image */}
  <div className=' h-full w-full'>
  <img src={aboutBg} alt="" className='relative w-full h-auto max-w-[100%] max-h-[600px]' />
  </div>
</div>
</div>
    </div>
  )
}

export default Hero