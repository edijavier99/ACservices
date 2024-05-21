import React from "react";
import "../styles/services.css"
import { FaBook, FaComment, FaCheckCircle,FaUserCheck } from 'react-icons/fa';

export const Services = () =>{
    const genetalDescription = (
        <>
            <p>At <strong>AC Services</strong>, our commitment to excellence shines through in every project we undertake. With extensive experience in <strong>home, building, and event cleaning</strong>, we've honed our skills to deliver exceptional results.</p>
            <p>Our clients trust us and are pleased with our impeccable work. While we specialize in these three core services, we're open to adapting to the individual needs of each client, providing <strong> customized and flexible solutions.</strong> Let us demonstrate our dedication to quality and customer satisfaction in every service we perform.</p>
        </>
    );    
    const homeClening = "Elevate your living space with our efficient house cleaning services. Our skilled team ensures a spotless home, tailored to your needs. Experience cleanliness and comfort like never before"
    const buildingCleaning = "Enhance your workplace environment with our comprehensive building cleaning solutions. Our dedicated team delivers top-notch cleaning services customized to meet your company's requirements. Trust us to maintain a pristine and inviting workspace for your employees and clients"
    const eventCleaning = "Elevate your event experience with our thorough cleaning services, offered before, during, and after your event. Our proactive team ensures impeccable cleanliness, creating a seamless and enjoyable atmosphere for your attendees. Trust us to handle the details so you can focus on hosting a successful event."
    
    return(
        <section id="services-board">
            <div className="row mx-0 px-0">
                <div className="flip-card-front col-md-12 align-items-center d-flex col-lg-12 m-auto">
                    <header className="services-left-side col-md-11 col-lg-6">
                        <h1 className="py-3">OUR SERVICES</h1>
                        <div className="service-description">{genetalDescription}</div>
                        <div className="services-steps">
                            <div className="d-flex step flex-column align-items-center px-3">
                                <span className="step-icon"><FaComment/></span>
                                <p className="pt-3">Establish effective communication with the client to understand their needs and expectations.</p>
                            </div>
                            <div className="d-flex step flex-column align-items-center px-3">
                                <span className="step-icon"><FaBook/></span>
                                <p className="pt-3">Develop a detailed plan including resource allocation and clear objectives to achieve the best results.</p>
                            </div>
                            <div className="d-flex step flex-column align-items-center px-3">
                                <span className="step-icon"><FaUserCheck/></span>
                                <p className="pt-3">Adjust and finalize the plan in collaboration with the client, ensuring alignment with their requirements and expectations.</p>
                            </div>
                            <div className="d-flex step flex-column align-items-center px-3">
                                <span className="step-icon"><FaCheckCircle/></span>
                                <p className="pt-3"> Execute the plan efficiently, ensuring customer satisfaction through impeccable cleaning and personalized attention.</p>
                            </div>
                        </div>
                       
                    </header>
                    <main className="col-md-11 col-lg-6 services-right-side">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>                        
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                            <div className="d-flex align-items-center col-md-12 eachService">
                                    <div className="img-board col-10">
                                        <img alt="company-img" className="service-img" src="https://plus.unsplash.com/premium_photo-1661963953739-93cc36583355?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9maWNpbmElMjBsaW1waWV6YXxlbnwwfHwwfHx8MA%3D%3D"/>
                                    </div>
                                    <div className="services-info text-center col-md-10">
                                        <h1 className="text-center py-3">Office Cleaning</h1>
                                        <p  className="p-1">{buildingCleaning}</p>
                                    </div> 
                                </div>            
                            </div>
                            <div className="carousel-item ">
                            <div className="d-flex align-items-center col-md-12 eachService">
                                    <div className="img-board col-10">
                                        <img alt="company-img" className="service-img" src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXZlbnRvc3xlbnwwfHwwfHx8MA%3D%3D"/>
                                    </div>
                                    <div className="services-info text-center col-md-10">
                                        <h1 className="text-center py-3">Event Cleaning</h1>
                                        <p  className="p-1">{eventCleaning}</p>
                                    </div> 
                                </div>          
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex align-items-center col-md-12 eachService">
                                    <div className="img-board col-10">
                                        <img alt="company-img" className="service-img" src="https://images.unsplash.com/photo-1552242718-c5360894aecd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D"/>
                                    </div>
                                    <div className="services-info text-center col-md-10">
                                        <h1 className="text-center p-3">House Cleaning</h1>
                                        <p className="p-1">{homeClening}</p>
                                    </div> 
                                </div>       
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>        
                    </main>
                <div>
            </div>
            </div>
            </div>
    </section>
    )
}