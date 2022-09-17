import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ModalManager} from '../modal';
import {modal} from '../utils';


export const ProjectDetailsContainer = (props:any) => {
    
    const {gallary, date, client, urlParams, repoParams, category, description} = props;
    
    return (
        <div id="">
            <div id="">
                <div className="modal-close-box">
                    <button data-toggle="tooltip" data-placement="left" title="Close" 
                        onClick={()=> ModalManager.close()} className="modal-close-btn">
                        <i className="bx bx-x"></i>
                    </button>
                </div>
                <section id="portfolio-details" className="portfolio-details">
                    <h2>Project Details</h2>
                    <div className="container">
                        <div className="portfolio-details-contents">
                            <div className="project-gallary col-lg-8">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="projects-swiper"
                                >
                                {gallary.map((val:any, key:any)=>(
                                    <SwiperSlide key={key}>
                                    <figure><img src={val} alt=""/></figure>
                                    </SwiperSlide>
                                    

                                ))}
                                                                     
                                </Swiper>
                            
                            </div>
    
                            <div className="projects-info col-lg-4">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: {category}</li>
                                        <li><strong>Client</strong>: {client}</li>
                                        <li><strong>Project date</strong>: {date}</li>
                                        <li><strong>Project URL</strong> 
                                           :  <a href={urlParams.url}
                                                 target="_blank"  rel="noreferrer" 
                                                 className="">
                                                {urlParams.name}

                                            </a>
                                        </li>

                                         <li><strong>Project Repository</strong> 
                                           :  <a href={repoParams.url}
                                                 target="_blank"  rel="noreferrer" 
                                                 className="">
                                                {repoParams.name}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="portfolio-info">
                                    <h3>Project detail</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
       
    )
}
