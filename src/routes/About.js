import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
       <Navbar/>
      <HeroImg2 heading="ABOUT." text=
      "Im a friendly front-End Developer."/>
       <AboutContent/>
       <Footer/>
    </div>
  );
};

export default About;