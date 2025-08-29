import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Raman Kumar</h1>
        <p>Engineer | CSE Gaming Tech | AWS Cloud Architect</p>
        <p>
          <a 
            href="https://github.com/RA0323" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}
          >
            GitHub: RA0323
          </a>
        </p>
      </header>
      
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
