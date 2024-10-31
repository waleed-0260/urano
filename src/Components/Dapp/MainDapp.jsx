import { MdKeyboardArrowRight } from "react-icons/md";
import line from "../../assets/line.png"
import { Link } from "react-router-dom";
const MainDapp = ({ text, img, heading, addText }) => {

  return (
    <div className='w-[90%] lg:max-w-[1200px] flex md:flex-row flex-col items-center justify-around my-6 gap-5' data-aos="fade-up">
      <div className='md:w-[50%] flex items-center justify-center'>
        <div className=" h-full sm:w-[80%] w-[120%] md:ml-[100px] ml-[0px]">
          <img src={img} alt="" className=' sm:w-[90%] sm:h-[90%] w-full h-[120%]' />
        </div>
      </div>
      <div className='md:w-[43%] flex items-center justify-center flex-col md:block relative md:mt-0 mt-[-100px]'>
        <div className='absolute top-[-100px] left-[80%]  w-[350px] h-[350px] bg-white opacity-20 blur-3xl rounded-full'></div>
        <div className='flex md:flex-row flex-col md:items-start items-center md:gap-4'>
          <div className='w-[20px] h-[170px]'>
            <img src={line} alt="" className='h-full w-full md:rotate-0 rotate-90' />
          </div>
          <div className='flex flex-col md:items-start items-center mt-[-40px] md:mt-0'>
            <p className="bg-gradient-to-r from-[#2DBDC5] to-[#16EAC0] text-transparent bg-clip-text font-conthrax text-xl md:text-left text-center">
              {heading ? heading : ""}</p>
            <p className={`textColor md:w-[80%] w-[90%] text-center md:text-left mt-4`}>{text}</p>
            <p className='w-[80%] textColor text-sm mt-4 md:text-left text-center'>{addText}</p>
            <Link to="/coming" className='flex flex-row items-center gap-2'>

              <p className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2DBDC5] to-[#16EAC0] flex items-center font-semibold">
                Coming Soon
              </p>
              <MdKeyboardArrowRight className="ml-0 mt-4 text-[#16EAC0]" />
            </Link>
          </div>
        </div>
      </div>
    </div>)
}

export default MainDapp