import React, { useState } from 'react';
import './Navbar.css'
import video1 from '../../video/pexels-pavel-danilyuk-5495898.mp4'
import video2 from '../../video/pexels-hugo-butery-7272375.mp4'
import img from '../../images/riaz.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faAutoprefixer, faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';


const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY > 170) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <section>
      <nav class={navbar ? "navbar navbar-expand-lg navbar-light fixed-top navBg" : "navbar navbar-expand-lg navbar-light fixed-top "} >
        <div class="container">
          <div className="logo">
            <h4><span className='mr-3'><FontAwesomeIcon icon={faAutoprefixer} /></span>shik</h4>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav  menual-customize">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skill">Skill</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#project">Project</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">Blog</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#resume">Resume</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>

            </ul>


          </div>
        </div>
      </nav>

      <div className="video-section">
        <video src={video1} muted loop autoPlay></video>
        <div className="video-overly"></div>
        <div className="text container mt-5 animate__animated animate__fadeInLeft">
          <div className="need-padding " >
            {/* <h5 className='pt-5'>Welcome To My World</h5> */}
            <h3 >I'm <span>Ashik</span></h3>
            <h3 className='customize'> I'm <span className='padding-need-typeWriter'>A</span>
              <Typewriter
                options={{
                  strings: ['Web Designer', 'Web Developer', 'React JS Developer', 'Javascript Developer'],
                  autoStart: true,
                  loop: true,
                }} />
            </h3>
            {/* <p>Web Desing & Development is my passion ,  Always I Do Hard Work To Make it Success <br/>
         I Always Try To Make  Something Better Than Others.
         </p> */}
            <div className="social-icon d-flex">
              <p >
                <a href="https://github.com/ashikbhuyan17"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/ashik17/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/ashikbhuyan17/"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/bhuyan_asik"><FontAwesomeIcon icon={faTwitter} /></a>

              </p>
            </div>
            <div className="download-my-cv">
              <a href="https://drive.google.com/uc?export=download&id=1pQdz31URYAgbcBpgFkAmg09JH27X1631"><button>Download My Resume <FontAwesomeIcon icon={faDownload} /></button></a>
              {/* <button>Download My Resume <FontAwesomeIcon icon={faDownload} /></button> */}
            </div>
          </div>
        </div>

      </div>


    </section>
  );
};

export default Navbar;