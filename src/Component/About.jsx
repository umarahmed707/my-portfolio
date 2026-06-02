import React from 'react'
import img5 from '../assets/My-pic.png'
import { TiHtml5 } from "react-icons/ti";
import { FaJsSquare } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";



const About = () => {
  return (
    <div className='About-container1'>

      <h1>About Me</h1>
      <p>I’m a passionate developer who enjoys creating clean, modern web experiences and continuously learning new skills to grow professionally.</p>

      <div className='About-container2'>
        
          <img
            src={img5}
            alt=""
className='about-img'
          />
        
        <div className='About-text'>
          <p>
            I am a dedicated, motivated, and hardworking individual who is passionate about learning new skills and continuously improving myself. I always try to give my best in every task I take on and focus on delivering quality work with honesty and responsibility. I believe that consistency, patience, and practice are the keys to success in any field.
            I have a strong interest in my chosen field and enjoy working on different types of creative and challenging projects that help me grow both personally and professionally. I am always eager to explore new technologies, tools, and techniques that can enhance my skills and make my work more effective.
            My goal is to build a successful career where I can use my knowledge and abilities to create useful and meaningful work. I also enjoy working in a positive and learning environment where I can collaborate with others, share ideas, and gain more experience.
            I strongly believe in self-improvement and I am always ready to face challenges because they help me become better and more skilled. I am committed to achieving my goals and becoming a valuable and skilled professional in the future.
          </p>
          <button className='Download'>DownLoad CV</button>
        </div>
      </div>

      <div className='Skill-main'>
        <div className='skill-container'>
          <TiHtml5 className='skill-icon' />
          <p>HTML</p>
        </div>
        <div className='skill-container'>
          <BiSolidFileCss className='skill-icon' />
          <p>CSS</p>
        </div>
        <div className='skill-container'>
          <FaJsSquare className='skill-icon' />
          <p>Javascript</p>
        </div>
        <div className='skill-container'>
          <FaReact className='skill-icon' />
          <p>React js</p>
        </div>
         <div className='skill-container'>
          <RiTailwindCssFill className='skill-icon' />
          <p>Tailwind CSS</p>
        </div>
        <div className='skill-container'>
       <SiFirebase className='skill-icon' />
          <p>Firebase</p>
        </div>
       
     
        
      </div>
    </div>
  )
}

export default About