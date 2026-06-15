import React from 'react'
import img1 from '../assets/Frame 52.png'
import img2 from '../assets/Frame 53.png'
import img3 from '../assets/Frame 54.png'
import img4 from '../assets/Frame 55.png'
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
          
          <CiLinkedin className='icon' />
          <RxGithubLogo className="icon" />
        </div>
        <div className='hero-btn'>
          <button className='btn'>Hire Me</button>
          <button className='Download'>Resume Download</button>
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