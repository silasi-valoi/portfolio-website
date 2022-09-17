import ReactDOM from 'react-dom/client';
import React, {CSSProperties, FC, ReactNode} from 'react'
import {Select} from './utils';

interface ModalStyles {
    content:CSSProperties;
    overlay:CSSProperties;
}

interface ModalProps {
    style?:ModalStyles;
    children:ReactNode[];
};

const stopPropagation = (e:any) => e.stopPropagation();


const Modal:FC<ModalProps> = (props) => {    
    const {style, children} = props;

    const close = () => {
        ModalManager.close()
    }

    console.log(props)

    return(
        <div id="modal-overlay" style={style?.overlay || {}} onClick={()=>close()}>
            <div id="modal-content" style={style?.content || {}} onClick={stopPropagation}>
                {children}
            </div>
        </div>
    )
};

export default Modal;


const page = Select('body') as HTMLBodyElement;
let node:Element;
let modals:ReactNode[] = [];
let root:ReactDOM.Root;

const renderModal = (component:ReactNode) => {
    if(modals.length === 0) return;
    
    if(!node){
        node = document.createElement('div');
        document.body.appendChild(node);
    }

    root = ReactDOM.createRoot(node);
    root.render(component);
}

export const ModalManager = {
    open:(contents:ReactNode) =>{
        modals.push(contents);
               
        if(modals.length === 1){ 
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