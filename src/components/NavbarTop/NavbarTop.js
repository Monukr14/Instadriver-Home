import React, { Component } from "react";
import { Button, Navbar, Nav } from 'react-bootstrap';
export default class NavbarTop extends Component {
  render() {
    return (
      <div>
          <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
        
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Button variant="outline-info" className="mr-sm-2">
            Search
          </Button>
          <Button variant="outline-info">Search</Button>
       
        </div>
        </Navbar>
      </div>
      
    );
  }
}
