import React from 'react';
import AboutMe from '../AboutMe/AboutMe';

import Navbar from '../Navbar/Navbar';
import Resume from '../Resume/Resume';
import ContactForm from '../Contact/ContactForm'
import Skill from '../Skill/Skill';
import Blog from '../Blog/Blog';
import Project from '../Project/Project';
import Top from '../TopButton/Top';
import ScrollToTop from 'react-scroll-to-top';
const HaederManagement = () => {
    return (
        <div>
            <div >
                <Navbar></Navbar>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
            <AboutMe></AboutMe>
            <Skill />
            {/* <Resume></Resume> */}
            <Project />
            <Blog />
            <ContactForm />
            {/* <Top /> */}
            <ScrollToTop smooth color="black" style={{ backgroundColor: "rgb(218, 202, 202)" }} />

        </div>
    );
};

export default HaederManagement;