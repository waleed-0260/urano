import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowRight } from "react-icons/md";
// import { useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import partner6 from "../../assets/partner6.png";
import partner7 from "../../assets/partner7.png";
import partner8 from "../../assets/partner8.jpeg";
import partner9 from "../../assets/partner9.png";
import partner10 from "../../assets/partner10.png";
import partner11 from "../../assets/partner11.png";
import partner12 from "../../assets/partner12.png";

const Partners = () => {
  // const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className="w-[90%] lg:max-w-[1200px] flex flex-col items-center justify-center text-white my-[100px]"
    >
      <p
        className="font-bold heading font-conthrax md:w-[40%] w-[90%] text-center"
      data-aos="fade-up"
        // data-aos-delay=""
      >
        Urano's advisors & partners
      </p>
      <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 hidden gap-3 mt-6" data-aos="fade-up" 
      data-aos-delay="300">
        <a
          href="https://www.hrcdigitalasset.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner12} alt="HRC" className="object-cover"/>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">HRC</p>
            <p className="text-sm textColor">DeFi advisors</p>
          </div>
        </a>

        <a
          href="https://www.thompsonstein.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
        
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner11} alt="Thompson & Stein" className="object-cover"/>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">
              Thompson & Stein
            </p>
            <p className="text-sm textColor">International law firm</p>
          </div>
        </a>

        <a
          href="https://notarify.io"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner2} alt="Notarify" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Notarify</p>
            <p className="text-sm textColor">Notarization on blockchain</p>
          </div>
        </a>

        <a
          href="https://novalabstudio.it"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
          
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner1}
              alt="Nova Lab"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Nova Lab</p>
            <p className="text-sm textColor">Social Media Manager</p>
          </div>
        </a>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]">
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner10} alt="LogiX Transport" className="object-cover"/>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">
              Aurora Bullion S.r.l
            </p>
            <p className="text-sm textColor">Gold investments advisor</p>
          </div>
        </div>

        <a
          href="https://magnitudofilm.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
          
        >
          <div className="h-[65px] w-[75px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner9} alt="Magnitudo" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Magnitudo</p>
            <p className="text-sm textColor">
              Film production & distribution advisors
            </p>
          </div>
        </a>

        <a
          href="https://www.bonoingegneria.it"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
        >
          <div className="h-[65px] w-[75px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner3}
              alt="Bono Ingegneria S.r.l."
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">
              Bono Ingegneria S.r.l.
            </p>
            <p className="text-sm textColor">Real Estate advisors</p>
          </div>
        </a>

        <a
          href="http://www.stayrecord.it"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
          
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner4}
              alt="Stay Record"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Stay Record</p>
            <p className="text-sm textColor">Entertainment advisors</p>
          </div>
        </a>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner8} alt="FinancePros" className="object-cover w-[97px] h-[65px]" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Iwona Matwiejew</p>
            <p className="text-sm textColor">Commodities advisor</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]">
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner7}
              alt="EduGlobal"
              className=" h-[70px] object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Gjon Radovani</p>
            <p className="text-sm textColor">Real Estate advisors</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner6}
              alt="HealthPlus"
              className="object-cover h-[80px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Luigi Fazari</p>
            <p className="text-sm textColor">Real Estate advisor</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]">
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner5}
              alt="EcoGreen Corp"
              className="w-[137px] h-[60px] mt-2 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">
              Stefano Visconti
            </p>
            <p className="text-sm textColor">Healthcare advisor</p>
          </div>
        </div>
      </div>

      {/* <div className="sm:hidden block"> */}

      <div className="sm:hidden flex w-[100%]">
      <Swiper data-aos="fade-up" data-aos-delay="400"
           modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        }}
        className='w-[90%] py-4 mt-5 z-0 relative sm:hidden flex' slidesPerView={1} spaceBetween={7} 
        >
            <SwiperSlide>
    <a href="https://www.hrcdigitalasset.com" target="_blank" rel="noopener noreferrer" className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
      <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
        <img src={partner12} alt="HRC" className="object-cover"/>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-base font-conthrax">HRC</p>
        <p className="text-sm textColor">DeFi advisors</p>
      </div>
    </a>
  </SwiperSlide>

  <SwiperSlide>
    <a href="https://www.thompsonstein.com/en/" target="_blank" rel="noopener noreferrer" className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
      <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
        <img src={partner11} alt="Thompson & Stein" className="object-cover"/>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-base font-conthrax">Thompson & Stein</p>
        <p className="text-sm textColor">International law firm</p>
      </div>
    </a>
  </SwiperSlide>

  <SwiperSlide>
    <a href="https://notarify.io" target="_blank" rel="noopener noreferrer" className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
      <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
        <img src={partner2} alt="Notarify" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-base font-conthrax">Notarify</p>
        <p className="text-sm textColor">Notarization on blockchain</p>
      </div>
    </a>
  </SwiperSlide>

  <SwiperSlide>
    <a href="https://novalabstudio.it" target="_blank" rel="noopener noreferrer" className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
      <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
        <img src={partner1} alt="Nova Lab" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-base font-conthrax">Nova Lab</p>
        <p className="text-sm textColor">Social Media Manager</p>
      </div>
    </a>
  </SwiperSlide>

  <SwiperSlide>
  <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner10} alt="LogiX Transport" className="object-cover" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Aurora Bullion S.r.l</p>
      <p className="text-sm textColor">Gold investments advisor</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <a
    href="https://magnitudofilm.com"
    target="_blank"
    rel="noopener noreferrer"
    className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[85px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner9} alt="Magnitudo" className="object-cover" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Magnitudo</p>
      <p className="text-sm textColor">Film production & distribution advisors</p>
    </div>
  </a>
</SwiperSlide>

<SwiperSlide>
  <a
    href="https://www.bonoingegneria.it"
    target="_blank"
    rel="noopener noreferrer"
    className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[75px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner3} alt="Bono Ingegneria S.r.l." className="object-cover" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Bono Ingegneria S.r.l.</p>
      <p className="text-sm textColor">Real Estate advisors</p>
    </div>
  </a>
</SwiperSlide>

<SwiperSlide>
  <a
    href="http://www.stayrecord.it"
    target="_blank"
    rel="noopener noreferrer"
    className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner4} alt="Stay Record" className="h-full w-full object-cover" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Stay Record</p>
      <p className="text-sm textColor">Entertainment advisors </p>
      </div>
  </a>
</SwiperSlide>

<SwiperSlide>
  <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner8} alt="FinancePros" className="object-cover w-[97px] h-[65px]" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Iwona Matwiejew</p>
      <p className="text-sm textColor">Commodities advisor</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner7} alt="EduGlobal" className="h-[70px] object-cover" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Gjon Radovani</p>
      <p className="text-sm textColor">Real Estate advisors</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner6} alt="HealthPlus" className="object-cover h-[80px]" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Luigi Fazari</p>
      <p className="text-sm textColor">Real Estate advisor</p>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-[100%] h-[120px]">
    <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
      <img src={partner5} alt="EcoGreen Corp" className="w-[137px] h-[60px] mt-2 object-cover" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-base font-conthrax">Stefano Visconti</p>
      <p className="text-sm textColor">Healthcare advisor</p>
    </div>
  </div>
</SwiperSlide>

          </Swiper>
          <div className="swiper-prev absolute text-white sm:top-[150px] top-[210px] md:left-0 transform -translate-y-1/2 z-0 sm:hidden block" onClick={() => swiperRef.current.swiper.slidePrev()}></div>
            <div className="swiper-next absolute text-white sm:top-[150px] top-[210px] transform -translate-y-1/2 z-0 sm:hidden block" onClick={() => swiperRef.current.swiper.slideNext()}></div>
          </div>

    </div>
  );
};

export default Partners;
