import { Waypoint } from 'react-waypoint';
import React from 'react';
import { Select } from '../utils';

const handleWaypointEnter = (e:any) => {
    
    let skilsContent = Select('.skills-content') as HTMLDivElement;
    if (skilsContent) {

        let progress = Select('.progress .progress-bar', true) as NodeListOf<HTMLDivElement>;
        progress.forEach((el:HTMLDivElement) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
    }
}


const SkillsAndTools:React.FC<any>  = (props) => {
         
    return(
        <Waypoint  onEnter={handleWaypointEnter}>
        <section id="skills-container" className="skills-container">
            <div className="container">
                <div className="section-title">
                    <h2>Professional Skills</h2>
                    <p>
                        As a developer, I specialize in creating modular and scalable front-end architectures.
                        I generate fresh and unique as well as clone of a famous webites (for my practice purpose)
                        content for any specific purpose.Since I respect the time,
                        I always deliver content within the promised timeframe.
                        I understand and respect the fact, that there is a story behind every brand ,
                        behind every individual.
                    </p>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="progress">
                            <span className="skill">Python / Django <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div 
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">HTML / CSS <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={90}
                                    aria-valuemin={0} 
                                    aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript / React <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={90}
                                    aria-valuemin={0}
                                     aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">TypeScript / React <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div 
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">C# / ASP.NET <i className="val">40%</i></span>
                            <div className="progress-bar-wrap">
                                <div 
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={40}
                                    aria-valuemin={0}
                                    aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        

                        <div className="progress">
                            <span className="skill">MSQL<i className="val">55%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar"
                                     role="progressbar" 
                                     aria-valuenow={55}
                                     aria-valuemin={0}
                                     aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Git / GITHUB<i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar"
                                     role="progressbar" 
                                     aria-valuenow={90}
                                     aria-valuemin={0}
                                     aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">AWS<i className="val">35%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar"
                                     role="progressbar" 
                                     aria-valuenow={35}
                                     aria-valuemin={0}
                                     aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">DOCKER<i className="val">30%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar"
                                     role="progressbar" 
                                     aria-valuenow={30}
                                     aria-valuemin={0}
                                     aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
        </Waypoint>
    )

}

export default SkillsAndTools; 


/*
 */