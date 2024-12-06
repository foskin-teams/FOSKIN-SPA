import "preline/preline";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState, useEffect } from "react";
import SEO from "./SEO";
import metadata from "./metadata";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Background from "./components/Background";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentPage(hash || "home");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <SEO metadata={metadata[currentPage]} />
      <div className="flex min-h-screen">
        <div className="hidden lg:block sm:w-2/5 Hero sticky top-0 h-screen overflow-hidden"></div>
        
        <div className="w-full lg:w-3/5 bg-white overflow-y-auto">
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
  );
}

export default App;
