//import React, { Component } from 'react';
import profilePicture from '../media/silas-dev.jpg'


const AboutView:React.FC  = () => {
        
    return(
        <section id="about-container" className="about-container">
        	<div className="container">
				<div className="section-title">
          			<h2>About</h2>
          			<p>
					   Versatile  Web Application Developer with 4 years handling full-stack development duties for clients.
                       Acquainted with dominant programming languages, protocols, and platforms needed to launch successful 
                       web applications. Adept at creating software that simultaneously pleases users, marketers, 
                       and security personnel.
					</p>
        		</div>

        		<div className="row">
          			<div className="col-lg-4" data-aos="fade-right">
            			<img src={profilePicture} className="img-fluid" alt=""/>
          			</div>
          			<div className="col-lg-8 pt-4 pt-lg-0 content">
            			<h3>UI/UX Designer &amp; Web Developer.</h3>
            			<p className="fst-italic">
                            I’m effective in verbal and written communication within the team and I can also be a
                            team player and able to play a leadership role within the team. I’m a hardworking and
                            patient person. I have the ability to design, code and deploy scalable, distributed
                            systems. I’m also curious about how systems work and they fail. I’m eager to learn
                            new technologies and solutions and I love open source and collaboration, I love coding.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        <strong>Birthday:</strong> <span>1 May 1990</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Phone:</strong> <span>+27 68 106 7016</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        <strong>City:</strong> <span>Bethlehem, South Africa</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        <strong>Age:</strong> <span>30++</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Email:</strong> <span>silasivaloi@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        <strong>Freelance:</strong> <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                           
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutView; 

