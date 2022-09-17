import ReactDOM from 'react-dom/client';
//import {ReactDOM as dom} from 'react-dom';



export const Select = (selector:string, all=false) => {
        
    if(all){
        return document.querySelectorAll(selector);
        
    }else{
      
        return document.querySelector(selector);
    }
    
};

const page = Select('body') as HTMLBodyElement;

export const toggleNavMenu = (show=false) => {
        
    if (show) {
        page.classList.add('mobile-nav-active')

    }else {
        page.classList.remove('mobile-nav-active')
    }
   
}

export const toggleMenu = () => {
    let hamburger = Select("#hamburger") as HTMLInputElement;
    
    if (hamburger) {
        if(matchMediaSize('max-width : 980px').matches){
            toggleNavMenu(false);
        }        
        hamburger['checked'] = false;
    }

};

export const handleWindowSizeChange = (mql:any) => {
    const hamburger = Select("#hamburger") as HTMLInputElement;
    console.log(hamburger, mql.matches)
    //Check if window match mobile size                       
    if (mql && mql.matches && hamburger) {
        hamburger.style.visibility = 'visible';
        
        // If  the hamburger is checked, keep navigation menu active
        if(hamburger.checked){
            toggleNavMenu(true);
        }else{
            toggleNavMenu(false);
        }

    }else if(hamburger){
        hamburger.style.visibility = 'hidden';
        toggleNavMenu(false);
        console.log('big screen', hamburger)
    }

    
};

export const handleHambugerClick = () =>{
    const hamburger = Select("#hamburger") as HTMLInputElement;
              
    if (hamburger.checked) {
        toggleNavMenu(true);
       
    }else{
        toggleNavMenu(false);
    }
}


export const matchMediaSize = (mediaSize:string):MediaQueryList =>{
    let size = `(${mediaSize})`;
    return window.matchMedia(size);
};

export const handlePageScroll =()=>{
    let bacTopBtn = Select('.back-to-top') as HTMLButtonElement;
   
    if (window.scrollY !== 0) {
        bacTopBtn.style.visibility = 'visible';
             
    }else {
        bacTopBtn.style.visibility = 'hidden';
    }
    
    let navButtons = Select('#navbar .scrollto', true) as NodeListOf<HTMLElement>;
    let position = window.scrollY + 250;
    
    navButtons.forEach(element => {

        let hash = element.getAttribute('href') || '';
        let section = Select(hash) as HTMLDivElement;
        
        if (section) {
            if (position >= section.offsetTop && 
                position <= (section.offsetTop + section.offsetHeight)) {
                element.classList.add('active')  

            }else{
                element.classList.remove('active')   
            }
        }
        
    });
};   


export function scrollToView(this:HTMLElement, ev:MouseEvent){
	ev.preventDefault()
    toggleMenu()
	    
	const section = this.getAttribute('href');
	if(section){
        const element = Select(section) as HTMLDivElement;
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } 
};



let node:Element;
let modals:React.ReactNode[] = [];
let root:ReactDOM.Root;

const renderModal = (component:React.ReactNode) => {
    if(modals.length === 0) return;
    
    if(!node){
        node = document.createElement('div');
        document.body.appendChild(node);
    }

    root = ReactDOM.createRoot(node);
    root.render(component);
}

export const modal = {
    open:(contents:React.ReactNode) =>{
        modals.push(contents);
               
        if(modals.length === 1){ 
            // render the modal only if there is no other showing modals
            renderModal(contents);
        }
        page.classList.add('modal-active');
    },
    close:()=>{
        page.classList.remove('modal-active');
        modals.shift();
        root.unmount();
    }
}