import React from 'react'
import img5 from '../assets/My-pic.png'
import { RxGithubLogo } from 'react-icons/rx'

import { CiLinkedin } from 'react-icons/ci'

const Hero = () => {
  return (

    <section className='Hero-section'>
      <div>
        <p style={{ fontSize: "24px" }}>Hi I am <br /><span style={{ fontSize: "28px" }}>Umar Ahmed</span></p>
        <h1>React JS Developer</h1>
        <div className='hero-img'>
          <a
            href="https://www.linkedin.com/in/umarahmedansari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className='icon' />

          </a>
          <a
            href="https://github.com/umarahmed707?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo className="icon" />


          </a>
        </div>
        <div className='hero-btn'>
          <a href="#contact">
          <button className='btn'>Hire Me</button>
          </a>
          <a href="/Umar_Ahmed_Resume.pdf" download>
          <button className='Download'>Resume Download</button>
          </a>
        </div>
        <div className="stats-container">
          <div className="stat-box">
            <h1>1 Year</h1>
            <p>Experiences</p>
          </div>

          <div className="divider"></div>

          <div className="stat-box">
            <h1>5+</h1>
            <p>Project done</p>
          </div>



        </div>
      </div>
      <div
        className='pic-container'
      >
        <img
          src={img5}
          alt=""
          className='hero-pic'
        />
      </div>
    </section>
  )
}

export default Hero