import React, { useEffect } from 'react';
import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ashik from './../../images/my-bg.png'
import AboutMeDetails from '../AboutMeDetails/AboutMeDetails';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'
import Aos from 'aos';

const AboutMe = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [0])
    return (
        <div className='background-need py-5' id="about">
            <div className="container padding">
                <div className="row">
                    {/* <div className="col-lg-4">
                        <div className="own-img">
                            <img src={ashik} alt="" />
                        </div>
                    </div> */}
                    <div className="col-lg-12">
                        <div className="row  " data-aos="fade-right">
                            <h1 className=' pt-5 mb-5 about-text text-center text-capitalize'><span className="readMore">WHO AM I?</span> </h1>
                            <p class="p-about text-white"><strong style={{ fontSize: '18px' }}>I'm a passionate
                                            programmer </strong>
                                        with vast knowledge about<strong > JavaScript, ReactJS, Redux, NodeJS, Express, MongoDB .</strong> I like to create Web-site and Develop website. i am punctual ,
                                        dependable and can be counted upon to finish what i start. I love
                                        cosmology and astrophysics. I am a curious mind always seeking the
                                        meaning of life and like to reveal the mysteries of the cosmos. I love
                                        to teach other people how to learn things . To me, perception is more
                                        important than knowledge.
                            </p>

                            <div class="row d-flex justify-content-start">
                                <div class="col-md-5 shadow p-3 m-2 rounded bg-dark" >
                                    <div class="services color-1">
                                        <span class="icon2"><i class="fas fa-cog fa-spin"></i></span>
                                        <h3 class="text-white">WHY CHOOSE ME</h3>
                                        <p class="p-about text-white">
                                            As i'm fresher, i have theoretical knowledge, but i can do hard work
                                            with any situation.I have lots of experience with  JavaScript, ReactJS, Redux, NodeJS, Express, MongoDB  and all the
                                            other usual techniques.
                                    </p>
                                    </div>
                                </div>
                                <div class="col-md-5  shadow p-3 m-2 bg-dark rounded" >
                                    <div class="services color-1">
                                        <span class="icon2"><i class="fas fa-cog fa-spin"></i></span>
                                        <h3 class="text-white">My MISSION</h3>
                                        <p class="p-about text-white">
                                            My mission is to focuses on the backend or server-side of Web delivery
                                            to ensure that a website function works correctly and efficiently also
                                            user friendly for clients.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;