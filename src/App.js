
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Login from './Component/Login';
// import Sigup from './Component/Sigup';
// import { initializeApp } from "firebase/app";
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Hero from './Component/Hero';

import Portfolio from './Component/Portfolio';
import Service from './Component/Service';
import Navbar from './Component/Nabvar';

function App() {

//  const firebaseConfig = {
//     apiKey: "AIzaSyBSF6Rg9ST3BykoqsT91s80NXOmGtb8rY0",
//     authDomain: "social-app-4ea7d.firebaseapp.com",
//     projectId: "social-app-4ea7d",
//     storageBucket: "social-app-4ea7d.firebasestorage.app",
//     messagingSenderId: "173041482743",
//     appId: "1:173041482743:web:ae324fe02f696b9b538cf2",
//   };

//   const app = initializeApp(firebaseConfig);
  return (
    <div>
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
