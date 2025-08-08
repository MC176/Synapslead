import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" onClick={scrollToTop} className="logo group">
          <span className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] bg-clip-text text-transparent font-bold">
            SynapsLead
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] transition-all duration-300 group-hover:w-full"></div>
        </a>

        <nav className="desktop">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group relative">
                <a href={link} className="relative px-3 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-[#d9b8b0]">
                  <span>{name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white font-semibold rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span>Découvrir</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
