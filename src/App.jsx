import React, { useState } from 'react';
import "preline/preline";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Background from './components/Background';
import Contact from './components/Contact';
import MetaTags from './components/MetaTags';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const metaData = {
    home: {
      title: 'FOSKIN - Your Personalized Acne Care App',
      description: 'FOSKIN is an innovative, personalized acne care app designed to help individuals tackle their skin concerns effectively.',
      image: 'https://storage.googleapis.com/foskin-storages/SPA-assets/img/og-img-metadata.png',
      url: 'https://foskin.id/home',
    },
    features: {
      title: 'Features - FOSKIN',
      description: 'Discover the features of FOSKIN that help you manage your acne effectively.',
      image: 'https://storage.googleapis.com/foskin-storages/SPA-assets/img/og-img-metadata.png',
      url: 'https://foskin.id/features',
    },
    background: {
      title: 'Background - FOSKIN',
      description: 'Learn about the background of FOSKIN and how it was developed.',
      image: 'https://storage.googleapis.com/foskin-storages/SPA-assets/img/og-img-metadata.png',
      url: 'https://foskin.id/background',
    },
    contact: {
      title: 'Contact Us - FOSKIN',
      description: 'Get in touch with us for any inquiries or support.',
      image: 'https://storage.googleapis.com/foskin-storages/SPA-assets/img/og-img-metadata.png',
      url: 'https://foskin.id/contact',
    },
  };

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <MetaTags 
        title={metaData[currentSection].title}
        description={metaData[currentSection].description}
        image={metaData[currentSection].image}
        url={metaData[currentSection].url}
      />
      <div className="flex min-h-screen">
        <div className="hidden lg:block sm:w-2/5 Hero sticky top-0 h-screen overflow-hidden"></div>
        <div className="w-full lg:w-3/5 bg-white overflow-y-auto">
          <Navbar onNavigate={handleNavigation} />
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
  );
}

export default App;