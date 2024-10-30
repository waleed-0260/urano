// import { useEffect } from 'react'
import React, {useEffect} from 'react'
import EcoSystem from '../Components/Home/EcoSystem'
import Explore from '../Components/Home/Explore'
import Future from '../Components/Home/Future'
import Hero from '../Components/Home/Hero'
import Orbit from '../Components/Home/Orbit'
import Partners from '../Components/Home/Partners'
import Roadmap from '../Components/Home/Roadmap'
import SceneCanvas from '../Components/Home/SceneCanvas'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#' symbol
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
    {/* <Hero/> */}
    <SceneCanvas />
    <Orbit/>
    <EcoSystem/>
    <Explore/>
    <Partners/>
    <Roadmap/>
    <Future/>
    </>
  )
}

export default Home