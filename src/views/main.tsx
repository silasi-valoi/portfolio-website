
import { useEffect } from "react";
import AOS from 'aos';
import PureCounter from "@srexi/purecounterjs";

import { TypeWriter } from "../type-writer";
import { handlePageScroll,
         Select, scrollToView,
         handleWindowSizeChange, 
         handleHambugerClick } from "../utils";
         
import AboutView from "./about";
import Contacts from "./contacts";
import Projects from "./projects";
import ResumeView from "./resume";
import SkillsAndTools from "./skills-and-tools";
import { NavigationBar } from "./navigation-bars";



const Main = () => {
    const backTotop = () => {
		window.scrollTo(0, 0);
	}
	
	useEffect(()=>{
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		})
		
		document.addEventListener('scroll', handlePageScroll);

		const navButtons = Select('#navbar .scrollto', true) as NodeListOf<HTMLElement>; 
		navButtons.forEach(element => {
			element.addEventListener('click', scrollToView)
		})

		let mql = window.matchMedia("(max-width : 980px)");
        mql.onchange = () => {
            handleWindowSizeChange(mql)
        }
                            
        handleWindowSizeChange(mql)  
		

		const backTotopBtn = Select('.back-to-top') as HTMLButtonElement;
		
		let navBarTrigger = Select("#hamburger") as HTMLLabelElement;
		
		navBarTrigger?.addEventListener('click', handleHambugerClick)
		backTotopBtn?.addEventListener('click', backTotop)

		TypeWriter()
					  
		new PureCounter();

		return ()=> {
			navButtons.forEach(element => {
				element.removeEventListener('click', scrollToView)
		    })

			document.removeEventListener('scroll', handlePageScroll); 
            
			navBarTrigger.removeEventListener('click', handleHambugerClick);
			backTotopBtn.removeEventListener('click', backTotop);
		}
	})
	
    return(
        <div id="app-container" className="container-fluid app-container">
        	<div className="hamburger-box" data-aos="fade-left" >
                <input type="checkbox" id="hamburger" hidden={true} name="hamburger" />
                <label htmlFor="hamburger" className="navbar-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <header id="header">
	        	<NavigationBar/>
        	</header>

            <section id="hero-container" className='d-flex flex-column justify-content-center align-items-center'>
                <div className="hero-contents" data-aos="fade-in">
                    <h1> Silasi Valoi</h1>
                    <p>I'm <span className="typed"></span></p>
                </div>
			</section>

            <main id="main-container">
                <AboutView/>
                <SkillsAndTools/>
                <Projects/>
                <Contacts/>
			</main>

			<footer id="footer">
			    <div className="container">
      				<div className="copyright">
        				<ul>
             				<span className='copyright-symbol'>&#169; 2020</span>
                        	<li className=''>
                            	Designed & coded by <span>Silasi Valoi</span>
                    		</li>
                    	</ul>
      				</div>
    			</div>
  			</footer>

  			<button type="button" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </button>
			
        </div>
        
    )
}

export default Main;
