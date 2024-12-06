import { useEffect, useState } from 'react';

import "preline/preline"
import '@fortawesome/fontawesome-free/css/all.min.css'

import SEO from './SEO'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Background from './components/Background'
import Contact from './components/Contact'
import metadata from './metadata'; 

function App() {
  const [currentMetadata, setCurrentMetadata] = useState(metadata.home); 

  const updateMetadata = () => {
    const hash = window.location.hash.substring(1) || 'home'; 
    setCurrentMetadata(metadata[hash] || metadata.home); 
  };

  useEffect(() => {
    updateMetadata();
    window.addEventListener('hashchange', updateMetadata); 

    return () => {
      window.removeEventListener('hashchange', updateMetadata); 
    };

  }, []);
  return (
    <>
      <div className="flex min-h-screen">
        <div className="hidden lg:block sm:w-2/5 Hero sticky top-0 h-screen overflow-hidden"></div>

        <div className="w-full lg:w-3/5 bg-white overflow-y-auto">
          <SEO metadata={currentMetadata} />
          <Navbar />
          <section id="home">
            <Home />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="background">
            <Background />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
