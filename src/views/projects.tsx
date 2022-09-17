import React from "react";

import {modal} from '../utils';
import Modal, {ModalManager} from '../modal';

import wiplayit1 from '../media/wiplayit-1.png';
import wiplayit2 from '../media/wiplayit-2.png';
import wiplayit3 from '../media/wiplayit-3.png';
import wiplayit4 from '../media/wiplayit-4.png';
import wiplayit5 from '../media/wiplayit-5.png';
import wiplayit6 from '../media/wiplayit-6.png';
import wiplayit7 from '../media/wiplayit-7.png';
import wiplayit8 from '../media/wiplayit-8.png';
import wiplayit9 from '../media/wiplayit-9.png';
import wiplayit10 from '../media/wiplayit-10.png';

import calculator1 from '../media/calculator-1.png';
import calculator2 from '../media/calculator-2.png';
import calculator3 from '../media/calculator-3.png';
import {ProjectDetailsContainer} from './project-details';


interface UrlParams {
    url:string;
    name:string;
};

interface ProjectDetails {
    category:string;
    client:string;
    date:string;
    urlParams:UrlParams;
    repoParams:UrlParams;
    description:string;
    gallary:string[];
};


const  projectDetailsProps:{[key:string]:ProjectDetails}  = {

    wiplayit:{
        category:'Full Stack Web Disign',
        client:'Personal Project',
        date:'01 March, 2020',
        urlParams:{
            url:'https://baloyi.pythonanywhere.com',
            name:'wiplayit.com'
        },
        repoParams:{
            url:'https://github.com/silasi-valoi/wiplay-it-project',
            name:'github repository'
        },
        description:`A Quora-like social network for football fans
                    that allows users to ask questions about anything related 
                    to football and enable users to answer questions and add comments,
                    upvote answers, upvote comments, edit their profiles, etc...
                    `,
        gallary:[wiplayit1, wiplayit2, wiplayit3,wiplayit4, wiplayit5, wiplayit6, wiplayit7, wiplayit8, wiplayit9, wiplayit10]
    },

    calculator:{
        category:'Web Disign',
        client:'Personal Project',
        date:'20 july, 2022',
        urlParams:{
            url:'https://silasi-valoi.github.io/calculator-app/',
            name:'calculator.com'
        },
        repoParams:{
            url:'https://github.com/silasi-valoi/calculator-app',
            name:'github repository'
        },
        description:`A simple basic calculator for doing  maths operations.`,
        gallary:[calculator1, calculator2, calculator3]
    }
}


const Projects:React.FC  = () => {
    const getModalContents = (params:ProjectDetails) => <ProjectDetailsContainer {...params}/> as React.ReactNode;

    const projects =  Object.keys(projectDetailsProps);
    //modal.open(getModalContents(project))
   
        
    return(
        <section id="projects-container" className="projects-container section-bg">
			<div className="container">
				<div className="section-title">
					<h2>Portfolio</h2>
					<p>Selection of stuff I have done so far.</p>
          		</div>
  
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    { projects.map((value, key)=> {
                        let project = projectDetailsProps[value]
                        let gallary = project.gallary;
                        return(
                            <div key={key} className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                <img src={gallary[0]} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <button className="portfolio-lightbox">
                                        <i className="bx bx-plus"></i>
                                    </button>
                          
                                    <button
                                        onClick={()=> ModalManager.open(
                                            <Modal children={[<ProjectDetailsContainer {...project}/>]}/>
                                        )}
                                    >
                                        <i className="bx bx-link"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
    		</div>
       </section>
    )

}

export default Projects; 

