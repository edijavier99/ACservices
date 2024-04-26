import React from "react";
import "../styles/navbar.css"
import logo from "../img/logo.jpg"


export const  Navbar = (props) =>{
    const { onToggle } = props; // Recibe la función onToggle desde las props
    const items = props.items.map((item, index )=> (
        <li className="nav-item" key={index}>
          <a className="nav-link " href={item.url}>
            {item.label}
          </a>
        </li>
      ));
    return(            
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> <img alt="logo" src={logo}  style={{width:55}}/></a>
          <button className="navbar-toggler" 
              type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarNavDropdown" 
              aria-controls="navbarNavDropdown"
              aria-expanded="false" 
              aria-label="Toggle navigation"
              onClick={onToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              {items}
            </ul>
          </div>
        </div>
      </nav>
    )
}

