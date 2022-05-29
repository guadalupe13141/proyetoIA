import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import Home from './pages/HomePage'
import Layout from "./pages/index";
import {Navbar, Container, Nav} from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
    <Navbar variant="dark" expand="lg">
    <Container>
        <NavLink to="/" className='navbar-brand' style={{marginLeft:-100,fontSize:23,fontWeight:'bolder'}}>PokeAPI</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
    </Container>

    </Navbar>
      <Routes>
          <Route path="/" element={<Layout/>} />
            <Route index element={<Home/>}/>
          <Route/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
