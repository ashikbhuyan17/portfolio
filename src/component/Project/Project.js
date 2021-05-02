import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Photography from '../../images/Photography.png'
import ajkerbazzar from '../../images/ajkerbazzar.jpg'
import personal from '../../images/persona.png'
import React from 'react';
import './Project.css'
const Project = () => {
    return (
        <div className=' background-need py-4' id="project">
            <div className="container">
                <h1 className=' pt-5 mb-5 about-text text-center text-capitalize'><span className="readMore">PROJECTS</span> </h1>
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="project-background">
                            <div className="background bg-warning-color">
                                <div className="view-project">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View Project
                                  </button>


                                    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content border-none">
                                                <div class="modal-header  border-none">
                                                    <h5 class="modal-title  border-none" id="exampleModalLabel">Project Name: </h5>
                                                    <button type="button  border-none" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body  border-none">
                                                    <h6>Technology Uses :</h6>
                                                    <button className='button'> javascript</button>
                                                    <button className='button'> React</button>
                                                    <button className='button'> Node JS</button>
                                                    <button className='button'> Express JS</button>
                                                    <div className="project-imgs-item py-4 text-center">
                                                        <img src={Photography} alt="" style={{ width: '100%' }} />
                                                    </div>
                                                    <div className="div-project-section text-justify">
                                                        <ul>
                                                            <h3>Features : </h3>
                                                            <ol class="list-group list-group-numbered">
                                                                <li>Responsive MERN Stack app with firebase and admin authentication,dashboard functionality for Admin and User</li>
                                                                <li>Customer can book service,check status, and able to give their feedback</li>
                                                                <li>Admin can modifier their service and add new admin and also change order list</li>
                                                            </ol>
                                                        </ul>
                                                    </div>
                                                    <div className="github-icon">
                                                        {/* //// ekhane href="" github er link dite hobe*/}
                                                        <a href="https://github.com/ashikbhuyan17/unrealistic-photography"> Client Site</a>
                                                        <a href="https://github.com/ashikbhuyan17/unrealistic-photography-server"> Server Site</a>
                                                        <a href="https://service-mern.web.app/"> Live Site</a>

                                                    </div>
                                                </div>
                                                <div class="modal-footer  border-none">
                                                    <button type="button " class="linearClose " data-bs-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-background1">
                            <div className="background bg-warning-color1">
                                <div className="view-project">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        View Project
                                  </button>


                                    <div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content border-none">
                                                <div class="modal-header  border-none">
                                                    <h5 class="modal-title  border-none" id="exampleModalLabel">Project Name: </h5>
                                                    <button type="button  border-none" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body  border-none">
                                                    <h6>Technology  Uses :</h6>
                                                    <button className='button'> javascript</button>
                                                    <button className='button'> React</button>
                                                    <button className='button'> Node JS</button>
                                                    <button className='button'> Express JS</button>
                                                    <div className="project-imgs-item py-4 text-center">
                                                        <img src={ajkerbazzar} alt="" />
                                                    </div>
                                                    <div className="div-project-section text-justify">
                                                        <ul>
                                                            <h3>Features : </h3>
                                                            <ol class="list-group list-group-numbered">
                                                                <li>It's a full MERN stack Web Application where anyone can see which Food we are
                                                                providing and can book a Food with their details. Anyone can see their booking
                                                            order,placea booking.Also update a booking state.It also has email authentication with firebase.</li>
                                                                <li>Users can search for food and book them.</li>
                                                                <li>Admin in can see all the booking and new food.</li>
                                                                <li>Admin can add food and change the order status.</li>
                                                                <li>Admin can create a new service and he can be monitoring placed order status.</li>
                                                            </ol>
                                                        </ul>
                                                    </div>
                                                    <div className="github-icon">
                                                        {/* //// ekhane href="" github er link dite hobe*/}
                                                        <a href="https://github.com/ashikbhuyan17/ajker-bazar-client"> Client Site</a>
                                                        <a href="https://github.com/ashikbhuyan17/ajker-bazar-server"> Server Site</a>
                                                        <a href="https://ajker-bazar-mern.web.app/"> Live Site</a>

                                                    </div>
                                                </div>
                                                <div class="modal-footer  border-none">
                                                    <button type="button " class="linearClose " data-bs-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-4">
                        <div className="project-background2">
                            <div className="background bg-warning-color2">
                                <div className="view-project">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                        View Project
                                  </button>


                                    <div class="modal fade " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content border-none">
                                                <div class="modal-header  border-none">
                                                    <h5 class="modal-title  border-none" id="exampleModalLabel">Project Name: </h5>
                                                    <button type="button  border-none" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body  border-none">
                                                    <h6>Technology Uses</h6>
                                                    <button className='button'> Python</button>
                                                    <button className='button'> Django</button>
                                                    <div className="project-imgs-item py-4 text-center">
                                                        <img src={personal} alt="" />
                                                    </div>
                                                    <div className="div-project-section text-justify">

                                                    </div>
                                                    <div className="github-icon text-center">
                                                        <a href="https://github.com/ashikbhuyan17/portfolio-django"> GitHub</a>
                                                        <a href="https://ashik17.herokuapp.com/"> Live Site</a>

                                                    </div>
                                                </div>
                                                <div class="modal-footer  border-none">
                                                    <button type="button " class="linearClose " data-bs-dismiss="modal">Close</button>

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

export default Project;