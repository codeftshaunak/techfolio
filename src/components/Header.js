import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = () => {

  const [isDarkModeBg, setIsDarkModeBg] = useState(false);
  const [isDarkModeFont, setIsDarkModeFont] = useState(false);

  const handleClick = () => {
    const primaryColorBg = isDarkModeBg ? '#000' : '#fff';
    const primaryColorFont = isDarkModeFont ? '#fff' : '#000';
    document.documentElement.style.setProperty('--primaryColorBg', primaryColorBg);
    document.documentElement.style.setProperty('--primaryColorFont', primaryColorFont);
    setIsDarkModeBg(!isDarkModeBg);
    setIsDarkModeFont(!isDarkModeFont);
  };


  return (
    <Wrapper className='container'>
      <div className="logo">
        @sagardey.
      </div>
      <nav className="navbar">
        <div className="nav-items">
        <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="about" className="nav-item">
            About
          </Link>
          {/* <a href="#project" className="nav-item">
            Project
          </a> */}
          <a href="https://www.youtube.com/@shaunakkd" target="_blank" className="nav-item">
            Youtube
          </a>
          <a href="https://docs.google.com/document/d/1eF6-jafNbZiDSVP_ctq7XDTiAZ8Fpqv04ZnMwqrzVfg/edit?usp=sharing" target="_blank" className="nav-item">
            Resume
          </a>
          <a href="https://www.upwork.com/freelancers/~010d6209cd08fc74cb" target="_blank" className="nav-item">
            Hire Me
          </a>
        </div>
        <div className="theme-toggle" onClick={handleClick}>
          {'light' ? '🌙' : '☀️'}
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding-top: 2rem;
  .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--primaryColorBg);
      color: var(--primaryColorFont);
      font-size: 0.9rem;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--cuteColor)
  }
  
  .nav-items {
    display: flex;
    align-items: flex-end;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    color: var(--primaryColorFont);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    border: 0.1px solid var(--cuteColor);
    margin: 0.2rem 0.5rem;
    padding: 0.2rem 0.5rem;
  }
  
  .nav-item:hover {
    border: 0.1px solid var(--primaryColorFont);
    background-color: var(--cuteColor);
    color: var(--primaryColorBg)
  }
  
  .theme-toggle {
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  
  .theme-toggle:hover {
    transform: rotate(180deg);
  }
  
  @media only screen and (max-width: 570px) {
    .navbar {
      display: block;
      border-left: 1px solid var(--cuteColor);
    }

    .nav-items {
      align-items: center;
      flex-direction: column;
      align-items: baseline;
    }

    .theme-toggle{
      margin-left: 1rem;
      margin-top: 0.1rem;
    }
    .theme-toggle:hover {
      color: var(--cuteColor);
      transform: rotate(0deg);
    }
  }
  
`

export default Navbar;
