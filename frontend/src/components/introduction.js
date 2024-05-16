import React, { useState } from "react";
import "../styles/introduction.css";
import { Navbar } from "./navbar";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { CookieBanner } from "./cookies";


export const IntroductionBoard = (props) => {
  const description ="We specialize in comprehensive and meticulous cleaning services for homes, buildings, and events. From pre-event preparation to post-event clean-up, our expert team ensures impeccable spaces at all times. Trust us for worry-free cleaning and enjoy a pristine environment on every occasion.";
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const menu = [
    { label: "Services", url: "/#services-board" },
    { label: "Reviews", url: "/#reviews" },
    { label: "FAQ", url: "/#faq-board" },
    { label: "Contact", url: "/#contact-body" }
  ];

  return (
    <section id="introduction-board">
      <Navbar items={menu} onToggle={handleNavbarToggle} />
      <div
          className={`inner-introduction-board col-md-6 mt-4 ${
            navbarOpen ? "navbar-open" : ""
          }`}
        >
          <h1>AC SERVICES</h1>
          <h3>OFFICE - EVENT - HOUSE</h3>
          <h3 className="company-name">Cleaning Services</h3>
          <h6 className="intro-description">{description}</h6>
          <a  href="/#contact-body" className="btn btn-success contactBtn mt-4">
            Contact Now
          </a>
          {/* <a  href="/#faq-board" className="btn btn-light ms-4 contactBtn mt-4">
            Learn more
          </a> */}
      </div>
      <a className="next-arrow" href="#services-board"><FaArrowAltCircleDown/></a>
      <CookieBanner/>
    </section>

  );
};




