import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { AcademicExcellence } from './components/AcademicExcellence/AcademicExcellence';
import { Certifications } from './components/Certifications/Certifications';
import { EngineeringStack } from './components/EngineeringStack/EngineeringStack';
import { Achievements } from './components/Achievements/Achievements';
import { Journey } from './components/Journey/Journey';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <AcademicExcellence />
        <Certifications />
        <EngineeringStack />
        <Achievements />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
