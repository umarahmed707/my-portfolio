import React from 'react'
import img1 from '../assets/Frame 52.png'
import img2 from '../assets/Frame 53.png'
import img3 from '../assets/Frame 54.png'
import img4 from '../assets/Frame 55.png'
import img5 from '../assets/My-pic.png'

const Hero = () => {
  return (

    <section className='Hero-section'>
      <div style={{marginTop:"50px"}}>
        <p style={{ fontSize: "24px" }}>Hi I am <br /><span style={{ fontSize: "28px" }}>Umar Ahmed</span></p>
        <h1 style={{ fontSize: "70px", marginTop: "20px" }}>React JS Developer</h1>
        <div style={{ display: "flex", gap: "20px", marginBottom: "40px", marginTop:"20px"}}>
          <img src={img1} alt="" className='icon' />
          <img src={img2} alt="" className='icon' />
          <img src={img3} alt="" className='icon' />
          <img src={img4} alt="" className='icon' />
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
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
  style={{
    position: "relative",
    width: "618px",
    height: "618px",
    marginTop: "80px",
    borderRadius: "50%",
    
    backgroundColor: "#2d2c2c",
  }}
>
  <img
    src={img5}
    alt=""
    style={{
      position: "absolute",
    
      top: "36%",
      left: "60%",
      transform: "translate(-50%, -50%)",
      width: "750px",
      height: "781px",
      objectFit: "cover",
    }}
  />
</div>
    </section>
  )
}

export default Hero