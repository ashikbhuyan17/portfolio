import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <div className=" background-need" id="skill">
            <div className="container">
                <div className="row flex-system">
                    <h1 className=' pt-5 my-5  about-text text-center'><span className="readMore">TECHNICAL SKILLS</span> </h1>
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
    );
};

export default Skill;