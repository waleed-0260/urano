import TokensMain from "../../assets/TokensMain.png";
import token1 from "../../assets/token1.png";
import token2 from "../../assets/token2.png";
import token3 from "../../assets/token3.png";
import token4 from "../../assets/token4.png";

const Tokens = () => {
  return (
    <div className="flex flex-col items-center w-[80%] lg:max-w-[1200px] justify-center my-6">
      <div className=" relative flex items-center justify-center" data-aos="fade-up">
      <div className='absolute  w-[450px] h-[450px] bg-gradient-to-b from-[#2DBDC5] to-[#16EAC0] opacity-20 blur-3xl rounded-full left-[-60px]'></div>
      <div className='sm:w-[90%] w-[100%] h-[400px]'>
        <img src={TokensMain} alt="" className='w-full h-full'/>
      </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 sm:mt-[100px]" data-aos="fade-up">
        <div className="md:w-[100%] w-[80vw] py-10 px-4 border-[1px] border-[#27292b] text-white flex flex-col justify-between items-center rounded-[15px] bg-[#0f0f0f] gap-3">
          <div className="w-[80px] h-[80px]">

            <img src={token1} alt="" className="h-full w-full" />
          </div>
          <div className="flex items-center flex-col relative md:top-[-20px]">
            <h1 className="font-conthrax text-center font-bol">
              Prioritized access to uNFT listings
            </h1>
            <p className=" md:w-[70%] text-center textColor">
            Gain early access to exclusive  uNFT listings before they become available to the general public.
            </p>
          </div>
        </div>

        <div className="md:w-[100%] w-[80vw] py-10 px-4 border-[1px] border-[#27292b] text-white flex flex-col justify-between items-center rounded-[15px] bg-[#0f0f0f] gap-3">
          <div className="w-[80px] h-[80px]">
            <img src={token4} alt="" className="h-full w-full" />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-conthrax text-center font-bold md:w-[80%] ">
            Priority in payments and cash flows on uNFT operations            </h1>
            <p className=" md:w-[70%] text-center textColor">
            Receive payments and distributions from uNFT operations with  priority over non-token holders.
            </p>
          </div>
        </div>

        <div className="md:w-[100%] w-[80vw] py-10 px-4 border-[1px] border-[#27292b] text-white flex flex-col justify-between items-center rounded-[15px] bg-[#0f0f0f] gap-3">
          <div className="w-[80px] h-[80px]">
            <img src={token3} alt="" className="h-full w-full" />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-conthrax text-center font-bold">
              Staking APR
            </h1>
            <p className=" md:w-[70%] text-center textColor">
            Earn rewards through a competitive Annual Percentage  Rate (APR) by staking your Urano tokens.
            </p>
          </div>
        </div>

        <div className="md:w-[100%] w-[80vw] py-10 px-4 border-[1px] border-[#27292b] text-white flex flex-col justify-between items-center rounded-[15px] bg-[#0f0f0f] gap-3">
          <div className="w-[80px] h-[80px]">
            <img src={token2} alt="" className="h-full w-full" />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-conthrax text-center font-bold">
              Governance
            </h1>
            <p className=" md:w-[70%] text-center textColor">
            Participate in key decisions within the Urano ecosystem,  influencing the future direction of the platform through voting rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
