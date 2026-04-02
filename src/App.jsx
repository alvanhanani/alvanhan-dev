import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
