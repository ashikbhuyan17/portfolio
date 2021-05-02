import React from 'react';
import AboutMe from '../AboutMe/AboutMe';

import Navbar from '../Navbar/Navbar';
import Resume from '../Resume/Resume';
import ContactForm from '../Contact/ContactForm'
import Skill from '../Skill/Skill';
import Blog from '../Blog/Blog';
import Project from '../Project/Project';
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

        </div>
    );
};

export default HaederManagement;