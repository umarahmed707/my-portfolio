import React from 'react'
import Card from './Card'
import { TbLayout } from "react-icons/tb";
import { MdLaptopWindows, MdOutlineDevices } from 'react-icons/md';
import { IoLogoReact } from 'react-icons/io5';
import { RxMagicWand } from 'react-icons/rx';
import { SlSpeedometer } from 'react-icons/sl';


const Service = () => {
        return (
                <section className='Service-container'>
                        <b> <p style={{ fontSize: "40px", color: "#FFFFFF" }}>Services</p></b>
                        <p style={{ fontSize: "20px", color: "#707070" }}>I build fast, responsive, and modern websites using clean code and user-friendly design to help businesses grow online.</p>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "60px 40px", gap: "40px" }}>
                                <Card image={<TbLayout className='icon' />} name="Modern Web Design" description="Creating clean, modern, and visually appealing website designs that reflect your brand identity.
Focused on user experience, readability, and professional layouts across all devices."/>
                                <Card image={<MdOutlineDevices className='icon' />
                                } name="Responsive Development" description="Building fully responsive websites that work smoothly on mobile, tablet, and desktop screens.
Ensuring consistent performance and a seamless user experience on every device."/>
                                <Card image={<IoLogoReact className='icon' />} name="React Development" description="Developing fast and interactive web applications using React and modern frontend technologies.
Creating reusable components and scalable solutions for better performance and maintenance."/>
                                <Card image={<RxMagicWand className='icon' />} name="UI Animation" description="Adding smooth and engaging animations to improve user interaction and website experience.
Using modern motion effects to make interfaces feel more dynamic and professional."/>
                                <Card image={<MdLaptopWindows className='icon' />} name="Landing Page Design" description="Designing high-converting landing pages tailored for products, businesses, and marketing campaigns.
Focused on clear messaging, modern visuals, and strong call-to-action sections."/>
                                <Card image={<SlSpeedometer className='icon' />} name="Fast Performance" description="Optimizing websites for speed, smooth loading, and better overall performance.
Improving user experience with clean code, lightweight assets, and SEO-friendly structure."/>
                        </div>
                </section>
        )
}

export default Service




