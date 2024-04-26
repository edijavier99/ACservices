import React from "react";
import { Contact } from "./contact";
import "../styles/footer.css"

export const Footer = () =>{
    return(
        <footer className="container-fluid px-0 footer-board" style={{backgroundColor: "#777977"}}>
          <div className="row mx-0 p-5 pb-0">
              <div className="col-md-5">
                  <h5 className="text-uppercase mb-4">About company</h5>
                  <p>
                  We are a compact-sized company, which enables us to offer highly personalized service and
                   maintain direct contact with our clients. We specialize in providing comprehensive solutions
                    for both homes and offices, as well as events. Thanks to our agile structure, we guarantee a 
                    fast and efficient process, minimizing wait times and ensuring an immediate response to your needs
                  </p>
              </div>
              <div className="col-md-4">
                <h5 className="text-uppercase mb-4 pb-1">Where are we located? </h5>
                <ul className="fa-ul" style={{marginLeft:" 1.65rem"}}>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">London, UK</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@acservices.com</span>
                    </li>
                    <li className="mb-2">
                      <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 44 234 567 88</span>
                    </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="text-uppercase mb-4 pb-1">Another way to contact Us </h5>
                    <Contact/>
              </div>
          </div>
          <div className="row mx-0 px-0 mt-3">
            <div className="col-md-12 text-center">
                © 2020 Copyright.
                <span className="ms-4">Ilarazi.com</span>
            </div>
          </div>
      </footer>
    )
}