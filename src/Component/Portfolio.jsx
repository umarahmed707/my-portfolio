import React from 'react'

const Portfolio = () => {
    const projects = [
    {
      title: "Raha_Financial",
      description: "Raha Financial is a modern financial services company providing simple, reliable, and smart financial solutions for individuals and businesses.",
      link: "https://raha-web.vercel.app/",
    },
    {
      title: "Raha_Landing",
      description: "Raha Landing is a digital platform designed to simplify property discovery and real estate opportunities through a seamless and user-friendly experience.",
      link: "https://raha-landing.vercel.app/",
    },
    {
      title: "Auto_Eye_Web",
      description:"Auto-Eye-Web is a smart web platform designed for intelligent monitoring and automation solutions It provides modern, efficient, tracking, and system management",
      link : "https://auto-eye-web.vercel.app/",
    },
    {
      title:"Naked_Turtle",
      description:"Naked Turtle is a creative and modern brand focused on unique designs, innovation, and quality experiences. It user-friendly solutions with a fresh and modern approach for customers",
      link:"https://naked-turtle.vercel.app/",
    },
    {
title:"Weather_App",
description:"Weather App provides real-time weather updates with temperature, It helps users stay updated with accurate forecasts and current weather conditions in a simple and user-friendly interface",
link:"https://umarahmed707.github.io/Weather_App/",

    },
    {
      title:"Namaz_Timing_App",
      description:"This Namaz App allows users to enter their city and country name to get accurate prayer timings instantly. It provides daily Namaz schedules to help users pray on time.",
      link:"https://umarahmed707.github.io/Namaz_Timing/",
    },
    {
title:"Nusa_Tech",
description:"Nusa Tech is a modern technology platform that provides innovative digital solutions and smart applications for users It focuses on creating user-friendly",
link:"https://umarahmed707.github.io/mini_web/",
    },
{
  title:"Todo_List",
  description:"Todo List app helps you organize daily tasks, set priorities, It a simple Task maneger It allows you to add, edit, and track your todos so you never miss important work or goals.",
  link:"https://github.com/umarahmed707/todo-list"
}
  ];

  return (
    <div className='portfolio-container2'>
        <h1>Portfolio</h1>
    
        
      
  <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="Portfolio-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            {/* Button with Link */}
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="port-btn"
            >
              Visit Website
            </button>
          </div>
        ))}
      </div>
        </div>
  )
}

export default Portfolio