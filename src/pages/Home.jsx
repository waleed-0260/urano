import React, { useEffect, useState } from 'react'
import EcoSystemNew from '../Components/Home/EcoSystemNew'
import Explore from '../Components/Home/Explore'
import Future from '../Components/Home/Future'
import Orbit from '../Components/Home/Orbit'
import Partners from '../Components/Home/Partners'
import Roadmap from '../Components/Home/Roadmap'
import SceneCanvas from '../Components/Home/SceneCanvas'
import { useLocation } from 'react-router-dom';
import useScreensize from '../hook/useScreensize'
import EcoSystem from '../Components/Home/EcoSystem'

const Home = () => {
  const [activePlanet, setActivePlanet] = useState("planet1");
  const location = useLocation();
  const { width } = useScreensize();

  const isMobile = width < 1024;

  // Scroll to the section if there's a hash in the URL
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <SceneCanvas />
      <Orbit />
      {isMobile ? <EcoSystem activePlanet={activePlanet} setActivePlanet={setActivePlanet} /> : <EcoSystemNew activePlanet={activePlanet} setActivePlanet={setActivePlanet} />}
      <Explore />
      <Partners />
      <Roadmap />
      <Future />
    </>
  )
}

export default Home