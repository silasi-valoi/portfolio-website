import React from 'react';
import * as Icon from 'react-feather';
import ProfilePicture from '../media/silas-dev.jpg';


export const NavigationBar:React.FC = () => {

    return (
        <div className="d-flex flex-column">
            <div className='profile'>
                <img src={ProfilePicture} alt="" className="img-fluid rounded-circle"/>
                <h1 className="text-light"><a href="index.html">Silasi Valoi</a></h1>
                <div className="social-links mt-3 text-center">
                    <a href="https://twitter.com/SilasiBaloyi" target="_blank" rel="noreferrer" className="twitter">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100002751514702" className="facebook" target="_blank" rel="noreferrer">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://github.com/silasi-valoi" target="_blank"  rel="noreferrer" className="github">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/silasi-valoi/" target="_blank" rel="noreferrer" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
           </div>

		    <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li>
                        <a href="#hero-container" className="nav-link scrollto active">
                            <i className="bx bx-home"></i> <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about-container" className="nav-link scrollto">
                            <i className="bx bx-user"></i> <span>About</span>
                         </a>
                    </li>
                   
                    <li>
                        <a href="#skills-container" className="nav-link scrollto">
                            <i className="bx bx-wrench"></i> <span>Tools</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects-container" className="nav-link scrollto">
                            <i className="bx bx-book-content"></i> <span>Portfolio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contacts-container" className="nav-link scrollto">
                            <i className="bx bx-envelope"></i> <span>Contact</span>
                        </a>
                    </li>
                </ul>
	        </nav>
        </div>
	)
};


/*
<li>
    <a href="#resume-container" className="nav-link scrollto">
        <i className="bx bx-file-blank"></i> <span>Resume</span>
    </a>
</li>
*/