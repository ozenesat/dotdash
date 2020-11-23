import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  const tasks = (
    <Fragment >
      <Nav.Link href="#bookreviews">Book Reviews</Nav.Link>
      <Nav.Link href="#newsletter">Newsletter</Nav.Link>
      <Nav.Link href="#buttonspopups">Buttons/Popups</Nav.Link>
    </Fragment>
  )

  const logo = "https://www.iac.com/sites/default/files/styles/170_106/public/dotdash_logo_300x186_v2.png?itok=39B03yrH"

  return (
    <div>
      <Navbar style={{ fontWeight: 'bold',
        backgroundColor: 'rgba(249, 249, 249, 0.7)',
        color: 'white',
        fontFamily: 'Righteous, cursive',
        fontSize: '1.2em' }} className="fixed-top" expand="md">
        <img src={logo} style={{ height: '1.5em' }}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontSize: '1em' }}>
            { tasks }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;