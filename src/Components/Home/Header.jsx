import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import logo from "../../assets/logo.png"
import { FaTelegramPlane, FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
import mobileMenu from "../../assets/mobileMenu.png"
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const[isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Disable scrolling when the sidebar is open
    if (isOpen) {
        document.body.style.overflow = 'hidden'; // This will prevent scrolling
        document.body.style.position = 'fixed'; // Fixes the body position to prevent scroll jump
        document.body.style.width = '100%'; // Prevent width change when position fixed
    } else {
        // Re-enable scrolling when the sidebar is closed
        document.body.style.overflow = ''; // Use an empty string to reset
        document.body.style.position = ''; // Reset position
        document.body.style.width = ''; // Reset width
    }

    // Clean up effect on component unmount
    return () => {
        document.body.style.overflow = ''; // Ensuring cleanup on unmount
        document.body.style.position = ''; // Reset position
        document.body.style.width = ''; // Reset width
    };
}, [isOpen]);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }

  // Cleanup event listener on unmount
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isOpen]);

const navigate = useNavigate();

const handleLaunchDApp = () => {
  setIsOpen(false); // Close the modal or any other action
  navigate('/dapp'); // Navigate to your DApp route
};

  return (
    <>
    <div className='w-full flex items-center justify-between flex-row bg-black px-3 z-50 border-b-[1px] border-b-[#27292b] z-50 absolute'>
      <Link to={"/"} onClick={()=>setIsOpen(false)}>
        <img src={logo} alt="" className='h-[70px] w-[150px]'/>
      </Link>
        <ul className='lg:flex hidden flex-row gap-4 text-white'>
           <li className='text-[#ACAEAE]'><Link to={"/about"} >About Us</Link></li> 
           <li className='text-[#ACAEAE]'><Link to={"/"} >Learn More</Link></li>
           {/* <li className='text-[#ACAEAE]' ><Link to={"/unft"} >NFTs</Link></li> */}
           <li className='text-[#ACAEAE]' ><Link to={"#contact"} >Contact Us</Link></li>
        </ul>
        <Link to={"/dapp"} className='rounded-md lg:flex hidden px-3 py-1 bg-white text-black font-semibold'>Launch DApp</Link>
        <div className='lg:hidden flex text-white text-lg' ref={sidebarRef} onClick={()=> setIsOpen(!isOpen)}> {isOpen ? <IoClose />  : <CiMenuFries/>} </div>
    </div>
    <div className={`fixed top-[65px] right-0 bottom-0 w-[300px] bg-black text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50 overflow-y-auto`}>
        <div className="flex flex-col h-full justify-between ">
          <nav className="flex flex-col space-y-4 h-[50%] p-6">
            <Link to="/about" className="text-lg hover:text-[#ACAEAE] font-conthrax" onClick={()=>setIsOpen(false)}>About Us</Link>
            <Link to="/" className="text-lg hover:text-[#ACAEAE] font-conthrax" onClick={()=>setIsOpen(false)}>Learn More</Link>
            <Link to="/" className="text-lg hover:text-[#ACAEAE] font-conthrax" onClick={()=>setIsOpen(false)}>Contact Us</Link>
            {/* <Link to="/dapp" className="text-lg hover:text-[#ACAEAE] font-conthrax" onClick={()=>setIsOpen(false)}>Dapp</Link> */}
          </nav>
          <div className="space-y-2 h-[50%] flex items-center justify-end flex-col bg-cover bg-center " style={{ backgroundImage: `url(${mobileMenu})` }}>
            <button className="w-[80%] bg-white text-black font-semibold py-2 px-4 m-[20px] rounded hover:bg-gray-200" onClick={handleLaunchDApp}>
              Launch DApp
            </button>
            <div className="flex justify-center space-x-4 p-3">
              {[FaTelegramPlane, FaDiscord, FaGithub, FaTwitter].map((Icon, index) => (
                <div key={index} className="rounded-full p-2 border border-[#27292b]">
                  <Icon className="h-6 w-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='absolute top-4 right-2'></div>
   </div>
    </>
  )
}

export default Header