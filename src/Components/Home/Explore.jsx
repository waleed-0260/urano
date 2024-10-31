import React, {useEffect} from "react";
import launchpad from "../../assets/launchpad.png";
import Dapps from "../../assets/Dapps.png";
import uNFT from "../../assets/uNFT.png";
import Token from "../../assets/Token.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div id="ecosystem" className="lg:max-w-[1200px] w-[90%] flex flex-col items-center justify-center my-4 bg-black text-white relative" >
      <p className="heading font-bold font-conthrax text-center" data-aos="fade-up">Explore the Urano <br /> Ecosystem</p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4  mt-[150px]" data-aos="fade-up" data-aos-delay="300">
        <div className="lg:w-[100%] sm:w-[40vw] w-[70vw] lg:mt-0 sm:mt-[50px] mt-[100px] h-[450px] bg-[#080707] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.6)] border-[1px] border-[#27292b] relative shadow-lg rounded-[15px] p-4 flex items-center justify-start flex-col">
          {/* Image container */}
          {/* <div className="w-[280px] h-[260px] mt-[-130px]"> */}
          <div className='absolute top-[10px] left-[15%] w-[200px] h-[180px] bg-gradient-to-b from-[#ffffff] to-[#2DBDC5] opacity-20 blur-lg rounded-full'></div>
          <div className="h-[200px] w-[240px]">
            <img src={Dapps} alt="Launchpad" className="h-[200px] w-[240px]" />
          </div>

          {/* </div> */}

          {/* Heading and Explore text */}
          <div className=" text-center  flex items-center justify-center flex-col">
            <h2 className="text-xl font-bold mb-2 font-conthrax">DApp</h2>
            <p className="textColor mb-4 w-[88%]">
            Discover a wide range of Real World Asset (RWA) opportunities to earn yield.            </p>
            <Link to="/dapp" className="text-[#2DBDC5] flex flex-row gap-2 items-center justify-center font-semibold hover:underline mt-12">
              Explore
            <MdKeyboardArrowRight/>  
            </Link>
          </div>
        </div>

        <div className="lg:w-[100%] sm:w-[40vw] w-[70vw] lg:mt-0 sm:mt-[50px] mt-[100px] h-[450px] bg-[#080707] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.6)] border-[1px] border-[#27292b] relative shadow-lg rounded-[15px] p-4 flex items-center justify-start flex-col transition-all duration-500 ease-in-out">
          {/* Image container */}
          {/* <div className="w-[200px] h-[260px] mt-[-130px]"> */}
          <div className='absolute top-[10px] left-[15%] w-[200px] h-[180px] bg-gradient-to-b from-[#ffffff] to-[#2DBDC5] opacity-20 blur-lg rounded-full'></div>
          <div className="h-[200px] w-[200px]">
            <img src={uNFT} alt="Launchpad" className="object-cover" />
          </div>          {/* </div> */}

          {/* Heading and Explore text */}
          <div className=" text-center  flex items-center justify-center flex-col">
            <h2 className="text-xl font-bold mb-2 font-conthrax">uNFT</h2>
            <p className="textColor mb-4 w-[80%]">
            Acquire a fraction of a tokenized Real World Asset (RWA) investment by purchasing uNFTs.            </p>
            <Link to="/unft" className="text-[#2DBDC5] flex flex-row gap-2 items-center justify-center font-semibold hover:underline mt-6">
              Explore
            <MdKeyboardArrowRight/>  
            </Link>
          </div>
        </div>

        <div className="lg:w-[100%] sm:w-[40vw] w-[70vw] lg:mt-0 sm:mt-[50px] mt-[100px] h-[450px] bg-[#080707] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.6)] border-[1px] border-[#27292b] relative shadow-lg rounded-[15px] p-4 flex items-center justify-start flex-col">
          {/* Image container */}
          {/* <div className="w-[200px] h-[260px] mt-[-130px]"> */}
          <div className='absolute top-[10px] left-[15%] w-[200px] h-[180px] bg-gradient-to-b from-[#ffffff] to-[#2DBDC5] opacity-20 blur-lg rounded-full'></div>
          <div className="h-[200px] w-[200px]">
            <img src={Token} alt="Launchpad" className="object-cover" />
          </div>          {/* </div> */}

          {/* Heading and Explore text */}
          <div className=" text-center  flex items-center justify-center flex-col">
            <h2 className="text-xl font-bold mb-2 font-conthrax">$URANO Token</h2>
            <p className="textColor mb-4 w-[87%]">
            Gain privileged access to new Real World Asset (RWA) investments, governance participation, and staking rewards.            </p>
            <Link to="/token" className="text-[#2DBDC5] flex flex-row gap-2 items-center justify-center font-semibold hover:underline">
              Explore
            <MdKeyboardArrowRight/>  
            </Link>
          </div>
        </div>

        <div className="lg:w-[100%] sm:w-[40vw] w-[70vw] lg:mt-0 sm:mt-[50px] mt-[100px] h-[450px] bg-[#080707] hover:bg-gradient-to-b from-[rgba(8,7,7,0.8)] via-[rgba(8,7,7,0.7)] via-30% to-[rgba(0,104,94,0.6)] border-[1px] border-[#27292b] relative shadow-lg rounded-[15px] p-4 flex items-center justify-start flex-col">
          {/* Image container */}
          {/* <div className="w-[280px] h-[260px] mt-[-130px]"> */}
          <div className='absolute top-[10px] left-[15%] w-[200px] h-[180px] bg-gradient-to-b from-[#ffffff] to-[#2DBDC5] opacity-20 blur-lg rounded-full'></div>
          <div className="h-[200px] w-[240px]">
            <img src={launchpad} alt="Launchpad" className="h-[200px] w-[240px]" />
          </div>          {/* </div> */}

          {/* Heading and Explore text */}
          <div className=" text-center  flex items-center justify-center flex-col">
            <h2 className="text-xl font-bold mb-2 font-conthrax">Launchpad</h2>
            <p className="textColor mb-4 w-[74%]">
            Tokenize your Real World Assets (RWA) with Urano and access a universe of new investors.
          </p>
            <Link to="/launchpad" className="text-[#2DBDC5] flex flex-row gap-2 items-center justify-center font-semibold hover:underline mt-6 z-50">
              Explore
            <MdKeyboardArrowRight/>  
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute top-[400px] left-[1200px] w-[380px] h-[400px] bg-gradient-to-b from-[#ffffff] to-[#2DBDC5] opacity-20 blur-3xl rounded-full'></div>

    </div>
  );
};

export default Explore;
