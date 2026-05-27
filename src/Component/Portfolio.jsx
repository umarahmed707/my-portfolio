import React from 'react'
import Portfoliocard from './Portfoliocard'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
        <h1>Portfolio</h1>
        <div className='portfolio-container2'>
<Portfoliocard name="Raha-Financial" description="i am developer" button="Click Here"/>
        <Portfoliocard name="Raha-Financial" description="i am developer" button="Click Here"/>
        <Portfoliocard name="Raha-Financial" description="i am developer" button="Click Here"/>
        <Portfoliocard name="Raha-Financial" description="i am developer" button="Click Here"/>
        <Portfoliocard name="Raha-Financial" description="i am developer" button="Click Here"/>
        <Portfoliocard name="Raha-Financial" description="i am developer" button="Click Here"/>
        <Portfoliocard name="Raha-Financial" description="i am developer" button="Click Here"/>
        </div>
        
        </div>
  )
}

export default Portfolio