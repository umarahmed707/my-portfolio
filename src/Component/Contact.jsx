// ContactSection.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ov9k66v",
      "template_o3its84",
      form.current,
      "UWU8kptZU6kP9MWhX"
    )
    .then(() => {
      alert("Message Sent Successfully!");
    })
    .catch(() => {
      alert("Something went wrong!");
    });
  };


  return (
    <section className="contact-section">
      <div className="contact-container">

        <h2>Contact me</h2>

        <p>
          Cultivating Connections: Reach Out And Connect With Me
        </p>


        <form 
          ref={form} 
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="input-group">
            <input 
              name="name"
              type="text" 
              placeholder="Name" 
            />

            <input 
              name="email"
              type="email" 
              placeholder="Email" 
            />
          </div>


          <div className="input-group">

            <input 
              name="phone"
              type="text" 
              placeholder="Phone Number" 
            />


            <select name="service">

              <option>Service Of Interest</option>
              <option>Web Development</option>
              <option>React application</option>
              <option>Landing Page</option>
              <option>SEO</option>

            </select>

          </div>


          <div className="input-group">

            <input 
              name="timeline"
              type="text" 
              placeholder="Timeline" 
            />


            <textarea 
              name="message"
              placeholder="Project Details..."
            ></textarea>

          </div>


          <div className="btn-wrap">

            <button type="submit">
              Send
            </button>

          </div>


        </form>


      </div>
    </section>
  );
};

export default Contact;

