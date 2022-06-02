import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import Home from './pages/HomePage'
import General from './pages/GeneralPage'
import Especifico from './pages/SpecificPage'
import Layout from "./pages/index";
import {Navbar, Container, Nav} from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
    <Navbar variant="dark" expand="lg">
    <Container>
        <NavLink to="/" className='navbar-brand' style={{marginLeft:"-8%", fontSize:"21px", color:"white"}}>Enfermedades Respiratorias</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{marginLeft:"2%"}}>
            <NavLink to="/DiagnosticoGeneral" className='nav-link'>Diagnostico General</NavLink>
            <NavLink to="/DiagnosticoEspecifico" className='nav-link'>Diagnostico Especifico</NavLink>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>

      <Routes>
          <Route path="/" element={<Layout/>} />
            <Route index element={<Home/>}/>
            <Route path="/DiagnosticoGeneral" element={<General/>}/>
            <Route path="/DiagnosticoEspecifico" element={<Especifico/>}/>
          <Route/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;