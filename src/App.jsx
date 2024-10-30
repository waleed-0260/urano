import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
//
import Footer from './Components/Home/Footer'
import Header from './Components/Home/Header'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Section from './pages/Section'
import Unft from './pages/Unft'
import Launchpad from './pages/Launchpad'
import Token from './pages/Token'
//
import AOS from "aos"
import './App.css'
import 'aos/dist/aos.css';
import ScrollToTop from './pages/ScrollToTop'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header />
        <div className='flex items-center justify-center flex-col bg-black'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/dapp' element={<Section />} />
            <Route path='/unft' element={<Unft />} />
            <Route path='/launchpad' element={<Launchpad />} />
            <Route path='/token' element={<Token />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}
