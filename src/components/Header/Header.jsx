import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import searchLogo from "../../assets/search.png";
import languageEN from "../../assets/languageEN.png";
import "./Header.scss";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-section">
        <img src={logo} className="header-logo" alt="logo" />
        <div className="search-bar">
          <img className="search-bar-icon" src={searchLogo} alt="search" />
          <input type="text" placeholder="SEARCH..." />
        </div>
      </div>
      <div className="header-section">
        <div className="header-nav">
          <div className="nav-dot" />
          <div className="nav-dot active" />
          <div className="nav-dot" />
          <div className="nav-dot" />
        </div>
        <img src={languageEN} className="language" alt="language selector" />
      </div>
    </div>
  );
}

export default Header;
