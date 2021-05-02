import React, { useEffect } from 'react';
import './Resume.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
import Skill from '../Skill/Skill.js'
const Resume = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [0])
    return (
        <div className="resume-background" >
            <div className="container" id="resume">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="resume-main-part">
                            <div className="resume-caption  ">
                                <h1 className='text-center'>Here Is <span>My Resume</span></h1>
                                <div className="row" data-aos="fade-right">
                                    <div className="col-lg-6 " >
                                        <div className="education-part">
                                            <div className="education-heading">
                                                <h3><span>WHAT CAN I DO?</span> </h3>
                                            </div>
                                            <div className="education-list-style text-left">
                                                <ul>
                                                    <li data-counter="1">
                                                        <h4>WEB DESIGN  <span> - Of The Website</span> </h4>
                                                        <p>I can create the look, layout and features of any website and all are responsive. The work involves understanding both graphic design and computer programming.</p>

                                                    </li>
                                                    <li data-counter="2">
                                                        <h4>WEB DEVELOPMENT <span> - Of The Website</span></h4>
                                                        <p>I work with the backend so I can create web applications to build the functionality of the website which gives a great experience.</p>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="education-part">
                                            <div className="education-heading">
                                                <h3><span>Education</span> </h3>
                                            </div>
                                            <div className="education-list-style text-left">
                                                <ul>
                                                    <li data-counter="1">
                                                        <h4>B.Sc in Software Engineering  </h4>
                                                        <p>Daffodil International University, Dhaka. [August, 2022] </p>

                                                    </li>
                                                    <li data-counter="2">
                                                        <h4>Higher School Certificate in Science</h4>
                                                        <p>Uttara Model Collage </p>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="row">

                                        <div className="col-lg-12 " data-aos="fade-right">
                                            <h2 className='text-center customize-caption'>Here Is My <span>Programming Skills</span></h2>
                                            <MySkill></MySkill>
                                        </div>
                                        <div className="row " data-aos="fade-right">
                                            <h2 className='other-skills pt-3 pb-5'>Here Is My <span>Other Skills</span> </h2>
                                            <OtherSkill></OtherSkill>
                                        </div>
                                    </div> */}
                                    {/* <Skill /> */}
                                    <div className="row flex-system">
                                        <h1 className=' pt-5 my-5  about-text '><span className="readMore">TECHNICAL SKILLS</span> </h1>
                                        <div className="col-lg-6">

                                            <div className="div-ul">

                                                <h6 className="text-white">JavaScript</h6>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                                </div>


                                                <h6 className="text-white">Node.js</h6>
                                                <div class="progress">
                                                    <div class="progress-bar yellow" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                                </div>

                                                <h6 className="text-white">OPP</h6>

                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                                </div>

                                                <h6 className="text-white">Database</h6>

                                                <div class="progress">
                                                    <div class="progress-bar blue" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                </div>



                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="div-ul">

                                                <h6 className="text-white">React.JS</h6>
                                                <div class="progress">
                                                    <div class="progress-bar blue" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                                </div>


                                                <h6 className="text-white">Express.js</h6>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
                                                </div>

                                                <h6 className="text-white">Git/Github</h6>

                                                <div class="progress">
                                                    <div class="progress-bar yellow" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                                </div>

                                                <h6 className="text-white">Linux</h6>

                                                <div class="progress">
                                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                                </div>



                                            </div>
                                        </div>
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

export default Resume;