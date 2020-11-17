import React, { Component } from "react";
import { Button, Navbar, Nav } from 'react-bootstrap';
import './NavbarTop.css'
export default class NavbarTop extends Component {
  render() {
    return (
      <div>
          <Navbar  sticky="top" >
        <div className="container-fluid">
        
          <Navbar.Brand href="#home">Instadriver</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Button variant="outline-info" className="mr-sm-2 nav-btn-stl">
            Jobs
          </Button>
          <Button className="nav-btn-stl" variant="outline-info">Sign in</Button>
       
        </div>
        </Navbar>
      </div>
      
    );
  }
}
