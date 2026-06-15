import React from 'react'
import img1 from '../assets/Screenshot 2026-06-15 135912.png'
import img2 from '../assets/Screenshot 2026-06-15 140003.png'
import img3 from '../assets/Screenshot 2026-06-15 140041.png'
import img4 from '../assets/Screenshot 2026-06-15 140106.png'
import img5 from '../assets/Screenshot 2026-06-15 140131.png'
import img6 from '../assets/Screenshot 2026-06-15 140224.png'
import img7 from '../assets/Screenshot 2026-06-15 140310.png'
import img8 from '../assets/Screenshot 2026-06-15 140351.png'

const Portfolio = () => {
  const projects = [
    {
      image: img1,
      title: "Raha_Financial",
      description: "Raha Financial is a modern financial services company  providing simple, reliable, and smart financial solutions for individuals and businesses.",
      link: "https://raha-web.vercel.app/",
    },
    {
      image: img2,
      title: "Raha_Landing",
      description: "Raha Landing is a digital platform designed to simplify property discovery and real estate opportunities through a seamless and user-friendly experience.",
      link: "https://raha-landing.vercel.app/",
    },
    {
      image: img3,
      title: "Auto_Eye_Web",
      description: "Auto-Eye-Web is a smart web platform designed for intelligent monitoring and automation solutions It provides modern, efficient, tracking, and system management",
      link: "https://auto-eye-web.vercel.app/",
    },
    {
      image: img4,
      title: "Naked_Turtle",
      description: "Naked Turtle is a creative and modern brand focused on unique designs, innovation, and quality experiences. It user-friendly solutions with a fresh and modern approach for customers",
      link: "https://naked-turtle.vercel.app/",
    },
    {
      image: img5,
      title: "Weather_App",
      description: "Weather App provides real-time weather updates with temperature, It helps users stay updated with accurate forecasts and current weather conditions in a simple and user-friendly interface",
      link: "https://umarahmed707.github.io/Weather_App/",

    },
    {
      image: img6,
      title: "Namaz_Timing_App",
      description: "This Namaz App allows users to enter their city and country name to get accurate prayer timings instantly. It provides daily Namaz schedules to help users pray on time.",
      link: "https://umarahmed707.github.io/Namaz_Timing/",
    },
    {
      image: img7,
      title: "Nusa_Tech",
      description: "Nusa Tech is a modern technology platform that provides innovative digital solutions and smart applications for users It focuses on creating user-friendly",
      link: "https://umarahmed707.github.io/mini_web/",
    },
    {
      image: img8,
      title: "Todo_List",
      description: "Todo List app helps you organize daily tasks, set priorities, It a simple Task maneger It allows you to add, edit, and track your todos so you never miss important work or goals.",
      link: "https://github.com/umarahmed707/todo-list"
    }
  ];

  return (
    <div className='portfolio-container2'>
      <h1>Portfolio</h1>




<div className='portfolio-container'>
      {projects.map((project, index) => (


        <div className="Portfolio-card" key={index}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="card-img"
            />
          )}

          <div className="tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <div className="card-footer">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Visit →
            </a>
          </div>
        </div>

      ))}
</div>
    </div>
  )
}

export default Portfolio