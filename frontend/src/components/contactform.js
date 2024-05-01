import React, { useState } from "react";
import "../styles/contactform.css"


export const ContactForm  = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente
            setValidated(true);
    
            // Crea un objeto con los datos del formulario
            const formData = {
                first_name: firstName,
                last_name: lastName,
                email_from: email,
                email_message: message
            };
    
            try {
                // process.env.BACKEND_URL
                console.log("ndndkjsacbjdasbcjadsbcdjasbcjdsbcjsbcjasbcjs",process.env.REACT_APP_BACKEND_URL);
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/send-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
    
                if (response.ok) {
                    console.log('Correo electrónico enviado con éxito!');
                    setEmail("")
                    setFirstName("")
                    setLastName("")
                    setMessage("")
                } else {
                    const responseData = await response.json(); // Obtener el cuerpo de la respuesta como JSON
                    console.error('Error al enviar el correo electrónico:', responseData.error || response.statusText);
                }
            } catch (error) {
                console.error('Error al enviar el correo electrónico:', error);
            }
        }
    };
    
    return(
        <section id="contact-body" className="d-flex flex-row col-md-11 p-3 my-5">
                <div className="col-ms-12 col-md-12 col-lg-5 d-flex flex-column align-items-center justify-content-center ">
                    <h3 className="contact-heading"> Feel free to reach out <br/> 
                    further information by <br/> 
                    completing the <span className="text-success">contact</span> form.</h3>
                    <p className="text-muted"><i className="fas fa-user-clock me-2"></i>No more than 24 hours  since receiving your request.</p>
                </div>
                <div className="col-ms-12 col-md-12 col-lg-7">
                    <form id="contact-form" className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label"><strong>First Name</strong></label>
                                <input type="text" className="form-control" id="firstName" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                <div className="invalid-feedback">
                                Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label"><strong>Last Name</strong></label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                <div className="invalid-feedback">
                                Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <div className="invalid-feedback">
                                Please enter a valid email addres.
                                </div>
                            </div>
                            <label htmlFor="contact-message" className="form-label"><strong>Message</strong></label>
                            <textarea id="contact-message"  className="form-control" onChange={(e)=> setMessage(e.target.value)} rows={3} placeholder="Write here your message" required></textarea>
                            <div className="invalid-feedback">
                                Valid message is required.
                                </div>
                            <hr className="mt-5" />
                            <button className="w-100 btn btn-success btn-lg" type="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </section>
    )
}