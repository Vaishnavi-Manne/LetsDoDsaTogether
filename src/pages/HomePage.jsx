import React, { useEffect } from 'react';
import Home from '../components/Home';
import Aboutpage from '../components/About/Aboutpage';
import ContactPage from '../components/ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 150,
      once: false,
      mirror: true,
    });
    // Refresh AOS to ensure it properly calculates element positions
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* Each of these sections will now animate based on the 
          data-aos attributes defined within their respective component files. */}
      <div data-aos="fade-in">
        <Home />
      </div>

      {/* Adding a div wrapper with a data-aos attribute allows you to control
          the animation for the entire section from the parent component. */}
      <div data-aos="fade-up">
        <Aboutpage />
      </div>
      
      <div data-aos="zoom-in-up">
        <ContactPage />
      </div>
    </div>
  );
}

export default HomePage;
