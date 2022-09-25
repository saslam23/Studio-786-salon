import React from 'react';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <div>
    <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
      <div className="navHeader">
      <div><Link  to="/" ><img className="studiologo" src="/assets/s786-white.png" alt="studio_786_logo"/></Link></div>
      <a target="_blank" style={{outline:'none', textDecoration:'none', color:'black !important'}} href="https://calendly.com/studio786salon"> <button className="appointmentButton" >Book an Appointment</button> </a>
      </div>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
       <Link className="navi-item" to="/" >Home</Link>
       <Link className="navi-item" to="/services" >Services</Link>
       <Link className="navi-item" to="/about"  >About</Link>
        <Link className="navi-item" to="/contact" >Contact</Link>
        <a target="_blank" style={{outline:'none', textDecoration:'none', color:'black'}} href="https://calendly.com/studio786salon"><button style={{outline:'none',minWidth:'210px', maxWidth:'210px', height:'40px', borderRadius:'5px', transform:'translateY(10px)',marginBottom:'10px'}}>Book an Appointment</button></a>
      </Nav>
      </Navbar.Collapse>
    </Navbar> 
          </div>
  )
}

