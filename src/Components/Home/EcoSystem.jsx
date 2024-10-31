import stars from '../../assets/stars.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import OrbitSystem from './OrbitSystem';

const EcoSystem = ({
  activePlanet,
  setActivePlanet
}) => {

  const content = {
    "planet1": {
      title: "Discover The Ecosystem",
      description: "Take your first steps into the world of Real World Assets (RWA) with uNFTs and the $URANO token.",
      progress: 25
    },
    "planet2": {
      title: "Tokenize your assets",
      description: "Urano Ecosystem enables you to bring Real World Assets (RWA) on-chain and opens up innovative pathways to generate value.",
      progress: 50
    },
    "planet3": {
      title: "Tokenization European License",
      description: "Invest in tokenized assets securely, and in compliance with European regulations.",
      progress: 75
    },
    "planet4": {
      title: "Faster, Cheaper, Safer",
      description: "Urano Ecosystem leverages blockchain technology to provide a transparent platform with low intermediary fees and faster settlement periods.",
      progress: 100
    },
  }

  return (
    <section className="relative overflow-hidden max-w-full w-full mx-auto lg:text-left text-center">
      <div className="absolute top-1/2 left-[-200px] -translate-y-1/2 w-[380px] lg:min-h-[500px] bg-gradient-to-b from-[#37d5de24] to-[#2DBDC5] opacity-20 blur-3xl rounded-full"></div>
      <div className="lg:max-w-[1200px] sm:w-[90%] flex lg:flex-row flex-col sm:items-center items-left justify-around text-white my-9 mx-auto">
        <div className="flex flex-col lg:w-[30%] relative ml-4 sm:ml-0" data-aos="fade-left">
          <h1
            data-aos="fade-up"
            className="heading lg:w-[360px] font-conthrax">
            {content[activePlanet]?.title}
          </h1>
          <p
            data-aos="fade-up"
            className="lg:w-[280px] textColor mt-6 lg:px-0 px-5">
            {content[activePlanet]?.description}
          </p>
          <div data-aos="fade-up" className='flex flex-row items-center lg:justify-start justify-center gap-2'>
            <Link to="#contact" className="mt-4 decoration-clone text-transparent bg-clip-text bg-gradient-to-r from-[#2DBDC5] to-[#16EAC0] items-center font-[500] flex gap-2 w-max" data-aos="fade-up">
              Contact Us
              <MdKeyboardArrowRight className="text-[#16EAC0]" />
            </Link>
          </div>
          <div data-aos="fade-up" className="lg:block hidden w-[80%] h-[6px] bg-[#212121] rounded-full relative overflow-hidden mt-9">
            <div className="h-full bg-[#16EAC0] shadow-lg relative overflow-hidden transition-[width] ease-in-out duration-200 rounded-full"
              style={{
                width: content[activePlanet]?.progress + "%"
              }}
            ></div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay={200} className="relative select-none flex-grow overflow-hidden flex justify-center items-center lg:mt-0 lg:max-h-[600px] max-h-[800px] overflow-y-hidden">
          <video
            className="absolute select-none pointer-events-none opacity-30 top-0 left-0 w-full h-full object-cover"
            src="assets/stars.webm"
            autoPlay
            loop
            muted
            poster={stars}
            playsInline
            controls={false}
          ></video>
          <OrbitSystem activePlanet={activePlanet} setActivePlanet={setActivePlanet} />
        </div>
        <div
          className="lg:hidden block max-w-[320px] w-full z-[22] pointer-events-none -translate-y-[50px] mx-auto h-[6px] bg-[#212121] rounded-full relative overflow-hidden">
          <div className="h-full bg-[#16EAC0] shadow-lg relative overflow-hidden transition-[width] ease-in-out duration-200 rounded-full"
            style={{
              width: content[activePlanet]?.progress + "%"
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default EcoSystem;