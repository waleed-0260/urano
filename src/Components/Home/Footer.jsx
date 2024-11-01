import React from 'react'
import { FaTelegramPlane, FaDiscord, FaGithub  } from 'react-icons/fa'
import { FaArrowRightLong } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-12">
    <div className="container mx-auto md:w-[70%] w-full md:p-0 p-6">
      <div className="flex md:flex-row flex-col items-start justify-between gap-3">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[70%]">
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase md:mt-0 mt-2">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#ADADAD]">About Us</Link></li>
              <li><Link to="/coming" className="text-[#ADADAD]">How It Works</Link></li>
              <li><Link to="/coming" href="#" className="text-[#ADADAD]">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-4 md:mt-0 uppercase md:mt-0 mt-2">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/coming" href="#" className="text-[#ADADAD]">Litepaper</Link></li>
              <li><Link to="/coming" href="#" className="text-[#ADADAD]">Documentation</Link></li>
              <li><Link to="/coming" href="#" className="text-[#ADADAD]">FAQ</Link></li>
              <li><Link to="/coming" href="#" className="text-[#ADADAD]">Brand Kit</Link></li>
              <li><Link to="/coming" href="#" className="text-[#ADADAD]">Audit Reports</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-4 md:mt-0 uppercase md:mt-0 mt-2">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/dapp" className="text-[#ADADAD]">DApp</Link></li>
              <li><Link to="/token" className="text-[#ADADAD]">Urano Token</Link></li>
              <li><Link to="/unft" className="text-[#ADADAD]">uNFT</Link></li>
              <li><Link to="/launchpad" className="text-[#ADADAD]">Launchpad</Link></li>
            </ul>
          </div>
        </div>
        <div className=' sm:w-[30%]'>
          <h3 className="text-lg font-semibold mb-4 uppercase sm:mt-0 mt-2">Newsletter & Blogs</h3>
          <p className="mb-4 text-[#ADADAD]">Subscribe our newsletter and get up to date about our updates</p>
          <form className="flex">
  <div className="relative flex-grow">
    <input
      type="email"
      placeholder="Email address"
      className="w-full px-4 py-2 pr-10 border border-[#27292b] bg-transparent text-white rounded-full focus:outline-none"
    />
    <FaArrowRightLong className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-sm" />
  </div>
</form>
        </div>
      </div>
      <div id="contact" className="flex md:flex-row flex-col items-start justify-between mt-8">
        <div className='w-[70%]'>
          <h3 className="text-lg font-semibold mb-4 uppercase">Contact Us</h3>
          <div className='mt-[20px]'>
            <p className='text-[#ADADAD]'>Onboarding & Partnership inquiries</p>
            <p>official@uranoecosystem.com</p>
          </div>
          <div className='mt-[40px]'>
            <p className='text-[#ADADAD]'>Support</p>
            <p>info@uranoecosystem.com</p>
          </div>
          <div className='mt-[40px]'>
            <p className='text-[#ADADAD]'>Press & Media</p>
            <p>social@uranoecosystem.com</p>
          </div>
          {/* <ul className="space-y-2">
            <li>General: <a href="mailto:info@example.com" className="text-[#ADADAD]">info@example.com</a></li>
            <li>Support: <a href="mailto:support@example.com" className="text-[#ADADAD]">support@example.com</a></li>
            <li>Sales: <a href="mailto:sales@example.com" className="text-[#ADADAD]">sales@example.com</a></li>
          </ul> */}
        </div>
        <div className='w-[30%] sm:mt-0 mt-[50px]'>
          <h3 className="text-lg font-semibold mb-4 uppercase">Follow Us</h3>
          <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 rounded-full p-2 flex items-center justify-center border-[1px] border-[#27292b]">
  <FaTelegramPlane size={20} />
</a>
<a href="#" className="hover:text-gray-300 rounded-full p-2 flex items-center justify-center border-[1px] border-[#27292b]">
  <FaDiscord size={20} />
</a>
<a href="#" className="hover:text-gray-300 rounded-full p-2 flex items-center justify-center border-[1px] border-[#27292b]">
  <FaGithub size={20} />
</a>
<a href="#" className="hover:text-gray-300 rounded-full p-2 flex items-center justify-center border-[1px] border-[#27292b]">
  <BsTwitterX size={20} />
</a>
          </div>
        </div>
      </div>
      <div className='text-[#ADADAD] flex sm:flex-row flex-col sm:gap-0 gap-2 sm:items-center items-left justify-between mt-6 border-t-[1px] border-[#27292b] pt-3'>
        <p className='text-sm'>&copy; 2024 Urano Ecosystem, All right reserved.</p>
        <p>Privacy Policy  •  Terms & Conditions</p>
      </div>
    </div>
  </footer>
    )
}

export default Footer