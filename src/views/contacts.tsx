
import {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import TextareaAutosize from 'react-autosize-textarea';

import { ContactFormState } from '../types';
import { Select } from '../utils';

const _formIsValid = (form:any):boolean => {
	for (let key in form) {
		if(/^ *$/.test(form[key])){
			return false
		}
	}

	return true

};


const messageLoading = Select('.loading') as HTMLDivElement;
const sentMessage = Select('.sent-message') as HTMLDivElement;
const errorMessage = Select('.error-message') as HTMLDivElement;

const initialState:ContactFormState = {
	form: { name: '', email: '', to_name: 'Silasi Valoi', message: '' },
	loading: false,
	messageSent: false,
	hasErrors: false
}


const Contacts = () => {
    const [state, setState] = useState(initialState);
    let {loading, form} = state
	
    const formIsValid = _formIsValid(form);
    let submitBtnStyles = loading || !formIsValid? {'opacity':1} : {};

    const handleChange = (event:any) => {
        event.preventDefault()
        const {target:{value, name}} = event
        let {form} = state;
        
        form[name] = value;
		setState(state => {
			return {...state, form};
		})
    }

	
	const handleSubmit =(e:any)=>{
        e.preventDefault()
        e.stopPropagation()
        let {form} = state;
		
		setState(state=>{
			return {...state, loading:true}
		})
           		
        emailjs.send('service_l37c1rb', 'template_m6loxby', form, 'isXgc77F1zbb89jdz')
        .then((result) => {
			setState(state=>{
				return {...state, loading:false, messageSent:true, hasErrors:false}
			})
          
        }, (error) => {
			setState(state=>{
				return {...state, loading:false,  messageSent:false, hasErrors:true}
			})
         
        });
    }

    const textAreaProps = {
        value : form.message,
        onChange : handleChange,
        name : "message",
        className : "textarea-field",
	}

	

	useEffect(()=>{
		
		if (state.loading) {
		   if(messageLoading) messageLoading.style.display = 'block';
		}else{
			if(messageLoading) messageLoading.style.display = 'none';
		}

		if (state.messageSent) {
			if(sentMessage)	sentMessage.style.display = 'block';
		} else {
			if(sentMessage) sentMessage.style.display = 'none';
			
		}

		if (state.hasErrors) {
			if(errorMessage) errorMessage.style.display = 'block';
		} else {
			if(errorMessage) errorMessage.style.display = 'none';
		}
	});
    
    return (
        <section id="contacts-container" className="contacts-container">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>I'm lookig for employment. Please hire me.</p>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>2613 Thejane Street, Bohlokong, Bethlehem 9701</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>silasivaloi@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+27 68 106 7016</p>
                            </div>

                           <iframe src='https://www.google.com/maps/place/Bethlehem/@-28.2453629,28.2443383,12z/data=!3m1!4b1!4m5!3m4!1s0x1e92bda1fb287cef:0x1c80af21a0405f53!8m2!3d-28.2423017!4d28.3111238'
                                frameBorder={0} style={{'border':0, 'width': '100%', 'height': '290px'}}
					            title='Map'
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form method="post" className="email-form">
                            <div className="d-inline-flex">
                                <div className="form-group d-flex col-md-6">
                                    <div className="input-icon-box">
                                        <button type="button"><i className="bx bx-user"></i></button>
                                    </div>
                                    <input type="text" name="name" value={form.name} onChange={handleChange}/>
                                    <span className="floating-label">Full Name</span>
                                </div>
                                <div className="form-group d-flex col-md-6">
                                    <div className="input-icon-box">
                                        <button type="button"><i className="bx bx-envelope"></i></button>
                                    </div>
                                    <input type="text" name="email" value={form.email} onChange={handleChange}/>
                                    <span className="floating-label">Email Address</span>
                                </div>
                            </div>
              
                            <div className="form-group d-flex">
                                <div className="input-icon-box">
                                    <button type="button"><i className="bx bx-message-rounded"></i></button>
                                </div>
                                <TextareaAutosize {...textAreaProps} rows={4}/>
                                <span className="floating-label">Message for Me</span>
                            </div>
                            
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message">
					                Something wrong happened, Please try again.
				                </div>
                                <div className="sent-message">
					                Your message has been sent. Thank you!
				                </div>
                            </div>
                            <div className="message-submit-box">
                                <button type="submit" 
                                    style={submitBtnStyles} disabled={loading || !formIsValid}
                                    onClick={(e)=> handleSubmit(e)}
                                    className="btn message-submit-btn">
                                    Send Mesage
                                </button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contacts;


