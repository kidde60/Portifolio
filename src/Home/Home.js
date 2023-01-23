import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter,
} from 'react-icons/fa';
import ProjectsCard from '../Projects/ProjectsCard';
import Navbar from '../Navbar/Navbar';
import './Home.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home">
          <h1 className="coln">
            Hello, Iam
            <span className="name"> George William Kidde</span>
          </h1>
          <div className="social">
            <a href="https://kgeorgewilliam60@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://github.com/kidde60">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kidde-george-william/">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/KGWilliam60">
              <FaTwitter />
            </a>
            <a href="#index.html">
              <i className="fa-solid fa-globe" />
            </a>
          </div>

          <p className="paragraph">I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, do not hestiate to contact me.</p>
          <div className="home-btn">
            <NavLink to="../Contact" className="hire">Hire me</NavLink>
            <a href="Resume.pdf" download="Resume.pdf">
              <button type="button" className="hire-btn">Get Resume</button>
              {' '}
            </a>
          </div>
        </div>
        <div className="profile">
          <div className="profile-photo" />
        </div>
      </div>
      <ProjectsCard />
    </>
  );
}
