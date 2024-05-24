import React from "react";
import "../styles/faq.css"
import { ContactForm } from "./contactform";

export const FAQ = () =>{
    return(
        <section id="faq-board">
            <header className="row mx-0 px-0">
                <div className="col-md-12 section-name d-flex flex-column align-items-center">
                    <h4>SUPPORT</h4>
                    <h1 className="text-center">Everything You Need To Know</h1>
                    <p className="text-muted text-center">Need something cleared up? Here are our most frecuenlty asked questions. </p>
                </div>
            </header>
            <main className="row mx-0 px-0 faq-body">
                <h2 className="text-center">Frecuently Asked Questions</h2>
                <p className="text-center text-muted">Everything you need to know about our services</p>
                <div className="col-md-8 mx-auto my-2">
                   <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            What is your company's experience in the cleaning sector?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We have over <span className="text-success fw-bold">10 years of experience</span> in the cleaning industry, providing high-quality services to a wide variety of clients. Our extensive experience has allowed us to perfect our techniques and ensure customer satisfaction.                           
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Are you flexible with last-minute changes?                            
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes, we understand that needs can change unexpectedly. <span className="fw-bold text-success">We adapt to last-minute changes</span>  to ensure that our services align with your requirements at all times, offering maximum flexibility and a quick response to your needs.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What is the quality of the products you use?
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We use<span className="fw-bold text-success"> high-quality products and the latest innovations</span> available on the market. This allows us to guarantee efficient and safe cleaning, protecting both the environment and the health of our clients.                           
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headiingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Do you offer personalized quotations?
                           </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headiingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes, we provide <span className="fw-bold text-success">personalized quotations</span> tailored to the specific needs of each client. We assess your requirements and provide a detailed quote to ensure you receive the best service at the best price.                            
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Do you supply the cleaning products yourselves?                           
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Yes, <span className="fw-bold text-success">we provide all the necessary cleaning products.</span> This includes the use of high-quality items that ensure optimal results and maintain high hygiene standards in every service we perform.                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ContactForm />
        </section>
    )
}