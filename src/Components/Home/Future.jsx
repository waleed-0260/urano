import React from 'react'
import mask from "../../assets/mask.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const Future = () => {
  return (
    <div className='md:w-[70%] w-[93vw] lg:max-w-[1200px] h-[300px] text-white rounded-2xl flex md:flex-row flex-col justify-around items-center bg-cover bg-center my-[50px] border-[1px] border-[#27292b]'  style={{ backgroundImage: `url(${mask})` }} data-aos="fade-up">
        <div className='md:w-[50%] md:p-0 p-4'>
            <p className='sm:text-2xl text-md font-bold font-conthrax text-center sm:text-left'>URANO ECOSYSTEM: Expand your horizons, tokenize the future</p>
        </div>
        <div>
            <Link to="#ecosystem" className='w-[120px] btnColor py-2 rounded-md flex flex-row items-center justify-center font-[500]'>Discover <MdKeyboardArrowRight className='mt-[0.7px]'/></Link>
        </div>
    </div>
  )
}

export default Future