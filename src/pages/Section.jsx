import React from 'react'
import Hero from '../Components/Dapp/Hero'
import Main from "../Components/Dapp/Main"
import DappsMain from "../assets/DappsMain.png"
import MainDapp from '../Components/Dapp/MainDapp'
const Section = () => {
  return (
    <>
    <Hero heading="Urano DApp" text="Urano DApp is the operational hub of the Urano ecosystem, where all tokenization activities take place. Here, you can buy, sell, and collect earnings from uNFTs—digital representations of tokenized Real World Assets (RWAs)."/>
    <MainDapp text="The DApp centralizes all financial transactions, offering a simple and secure way to engage with the Urano ecosystem, powered by blockchain technology."  img={DappsMain}/>
    </>
  )
}

export default Section