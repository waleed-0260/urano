import orbitBg from "../../assets/orbitBg.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Orbit = () => {

  return (
    <div
      className='w-full bg-no-repeat bg-cover bg-center items-center justify-center text-white flex flex-col lg:min-h-[400px] lg:mt-[-100px]'
      style={{ backgroundImage: `url(${orbitBg})` }} 
    >
      <p className='heading font-bold text-center font-conthrax' data-aos="fade-up">
        The orbit of 
        <br />
        RWA Tokenization
      </p>
      <div className='flex sm:flex-row flex-col gap-4 mt-4'>
        <Link to="#ecosystem" className='sm:w-[130px] w-[50vw] cursor-pointer btnColor rounded-lg py-2 font-semibold flex items-center justify-center gap-1 text-center' data-aos="fade-right">
          Discover
          <MdKeyboardArrowRight className='mt-[0.3px]' />
        </Link>
        <button className='sm:w-[130px] w-[50vw] cursor-pointer  rounded-lg py-2 bg-transparent border-[2px] border-[#2DBDC5] text-white flex items-center justify-center gap-1 text-center' data-aos="fade-left">
          Learn More
          <MdKeyboardArrowRight className='mt-[0.3px]' />
        </button>
      </div>
    </div>
  )
}



export default Orbit