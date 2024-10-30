import React from 'react'
import Hero from '../Components/Dapp/Hero'
import Tokens from '../Components/Token/Tokens'
import Table from '../Components/Token/Table'

const Token = () => {
  return (
    <>
     <Hero heading="Urano Token" text="The $URANO Token is the native token of the Urano ecosystem, offering holders exclusive benefits such as priority access to new tokenized investments, discounts on transaction fees, and participation in governance and rewards programs."/>
     <Tokens/>
     <Table/>
    </>
  )
}

export default Token