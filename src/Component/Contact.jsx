// ContactSection.jsx
import React from "react";


const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact me</h2>
        <p>
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Phone Number" />
            
            <select>
              <option>Service Of Interest</option>
              <option>Web Development</option>
              <option>React application</option>
              <option>Landing Page</option>
              <option>SEO</option>
            </select>
          </div>

          <div className="input-group">
            <input type="text" placeholder="Timeline" />
            <textarea placeholder="Project Details..."></textarea>
          </div>

          <div className="btn-wrap">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;