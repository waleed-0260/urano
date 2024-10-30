import React from 'react'
import Hero from '../Components/Dapp/Hero'
import Main from '../Components/Dapp/Main'
// import uNFT from "../assets/uNFT.png"
import mainUnft from "../assets/mainUnft.png"
const Unft = () => {
  return (
    <>
        <Hero heading="Urano NFTs" text="uNFTs (Urano NFTs) are innovative digital assets representing real-world underlying assets, including value and cash flow. Each uNFT is certified by legal professionals, ensuring authenticity and compliance with regulatory standards. uNFTs make investments accessible, secure, and transparent, revolutionizing participation in real-world markets 
while minimizing transaction costs."/>
<Main heading="Example Real Estate Investment" text="Imagine a commercial building valued at 2 million dollars. The owner tokenizes the building into 2,000 uNFTs, each representing fractional ownership. If you buy 100 uNFTs for 1,000 dollars each, you own 100/2,000 of the building." img={mainUnft} addText="If the building generates 100,000 dollars in annual rental income, you receive 5,000 dollars per year, reflecting your share of the earnings."/>
    </>
  )
}

export default Unft