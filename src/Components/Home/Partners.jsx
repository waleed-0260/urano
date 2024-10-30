import React, { useEffect, useState } from "react";
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
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className="w-[90%] lg:max-w-[1200px] flex flex-col items-center justify-center text-white my-[100px]"
      data-aos="fade-up"
    >
      <p
        className="font-bold heading font-conthrax md:w-[40%] w-[90%] text-center"
        data-aos="fade-up"
      >
        Urano's advisors & partners
      </p>
      <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 hidden gap-3 mt-6">
        <a
          href="https://www.hrcdigitalasset.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-right"
        >
          <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner12} alt="HRC" />
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
          data-aos="fade-up"
        >
          <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner11} alt="Thompson & Stein" />
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
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-right"
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner2} alt="Notarify" className="w-[52px] h-[52px]" />
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
          data-aos="fade-left"
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner1}
              alt="Nova Lab"
              className="w-[49.61px] h-[33.32px] object-fit"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Nova Lab</p>
            <p className="text-sm textColor">Social media manager</p>
          </div>
        </a>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-right">
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner10} alt="LogiX Transport" />
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
          data-aos="fade-left"
        >
          <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner9} alt="Magnitudo" className="w-[52px] h-[41px]" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Magnitudo</p>
            <p className="text-sm textColor">
              Film production & distribution Advisors
            </p>
          </div>
        </a>

        <a
          href="https://www.bonoingegneria.it"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-right"
        >
          <div className="h-[70px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner3}
              alt="Bono Ingegneria S.r.l."
              className="w-[53px] h-[56px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">
              Bono Ingegneria S.r.l.
            </p>
            <p className="text-sm textColor">Real estate advisors</p>
          </div>
        </a>

        <a
          href="http://www.stayrecord.it"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]"
          data-aos="fade-left"
        >
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner4}
              alt="Stay Record"
              className="h-full object-cover mt-4"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Stay Record</p>
            <p className="text-sm textColor">Entertainment advisors</p>
          </div>
        </a>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-left">
          <div className="h-[75px] w-[75px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img src={partner8} alt="FinancePros" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Iwona Matwiejew</p>
            <p className="text-sm textColor">Commidities advisor</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-up">
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner7}
              alt="EduGlobal"
              className="w-[77px] h-[98px] object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Gjon Radovani</p>
            <p className="text-sm textColor">Art-real Estate advisors</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-left">
          <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner6}
              alt="HealthPlus"
              className="w-[69px] h-[100px] object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Luigi Fazaari</p>
            <p className="text-sm textColor">Real estate advisor</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 lg:w-[100%] md:w-[28vw]" data-aos="fade-up">
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

      <div className="flex sm:hidden flex-col items-center justify-center w-full mt-4 gap-4">
        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center w-full px-2 py-3 gap-3">
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner1}
              alt="Thompson & STEIN"
              className="w-[49.61px] h-[33.32px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Nova Lab</p>
            <p className="text-sm textColor">Social Media Manager</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
          <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner2}
              alt="Global Ventures"
              className="w-[52px] h-[52px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">Notarify</p>
            <p className="text-sm textColor">Notarization on Blockchain</p>
          </div>
        </div>

        <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
          <div className="h-[70px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
            <img
              src={partner3}
              alt="Tech Innovators"
              className="w-[53px] h-[56px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base font-conthrax">
              Bono Ingegneria S.r.l.
            </p>
            <p className="text-sm textColor">Real Estate Advisors</p>
          </div>
        </div>

        {seeMore ? (
          <>
            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner4}
                  alt="Future Solutions"
                  className="h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">Stay Record</p>
                <p className="text-sm textColor">Entertainment advisors</p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner5}
                  alt="EcoGreen Corp"
                  className="w-[137px] h-[80px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">
                  EcoGreen Corp
                </p>
                <p className="text-sm textColor">Sustainable energy company</p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner6}
                  alt="HealthPlus"
                  className="w-[69px] h-[100px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">
                  Luigi Fazaari
                </p>
                <p className="text-sm textColor">Real Estate Manager</p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner7}
                  alt="EduGlobal"
                  className="w-[77px] h-[98px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">
                  Gjon Radovani
                </p>
                <p className="text-sm textColor">Art-real estate advisors</p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner8}
                  alt="FinancePros"
                  className="w-[77px] h-[98px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">
                  Iwana matweje
                </p>
                <p className="text-sm textColor">Commidities advisor</p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner9}
                  alt="Creative Minds"
                  className="w-[52px] h-[41px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">Magnitudo</p>
                <p className="text-sm textColor">
                  Film production & distributor advisor
                </p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[65px] w-[65px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner10}
                  alt="LogiX Transport"
                  className="w-[54px] h-[62px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">
                  Aurora Bullion S.r.l
                </p>
                <p className="text-sm textColor">Gold investment advisors</p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner11}
                  alt="Smart Homes Inc."
                  className="w-[55px] h-[33px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">
                  Thompson & Stein
                </p>
                <p className="text-sm textColor">International Law Firm</p>
              </div>
            </div>

            <div className="border-[1px] border-[#27292b] rounded-[15px] bg-[#0f0f0f] flex flex-row items-center px-2 py-3 gap-3 w-full">
              <div className="h-[75px] w-[80px] overflow-hidden rounded-full bg-white p-3 flex items-center justify-center">
                <img
                  src={partner12}
                  alt="Smart Homes Inc."
                  className="w-[54px] h-[18px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-base font-conthrax">HRC</p>
                <p className="text-sm textColor">DeFi advisors</p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center bg-[#0f0f0f] w-full p-4 py-[40px] rounded-lg mt-[-110px] bg-opacity-90 shadow-2xl">
            <p
              className="textColor text-[#2DBDC5] font-bold"
              onClick={() => setSeeMore(!seeMore)}
            >
              Expand
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
