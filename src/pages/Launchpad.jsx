import React from 'react'
import Hero from '../Components/Dapp/Hero'
import Main from '../Components/Dapp/Main'
import launchpadMain from "../assets/launchpadMain.png"
const Launchpad = () => {
  return (
    <>
    {/* hsadl */}

            <Hero heading="Urano Launchpad" text="Do you have a valuable asset, business, or deal that could be tokenized? The Urano Launchpad is your gateway to the global market. Contact us to list your Real World Asset (RWA) on Urano and present it to millions of potential investors."/>
<Main text="Urano Launchpad enables you to leverage the power of tokenization, expanding your reach and accessing new liquidity opportunities." img={launchpadMain}/>
    </>
  )
}

export default Launchpad