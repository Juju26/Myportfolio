import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MvpLandingPage from './components/MVP/MvpLandingPage'
import DetailedProjects from './components/DetailedProjects'
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }
  const mvp = "/guruva"
  const isMvpPage = window.location.pathname.toLowerCase() === mvp;
  const isDetailedProjectsPage = window.location.pathname.toLowerCase() === '/detailedprojects';
  console.log(window.location.pathname.toLowerCase());
  
  if (isMvpPage) {
    return <MvpLandingPage />;
  }

  if (isDetailedProjectsPage) {
    return (
      <ThemeProvider>
        <div className="App">
          <Header />
          <main>
            <DetailedProjects />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
