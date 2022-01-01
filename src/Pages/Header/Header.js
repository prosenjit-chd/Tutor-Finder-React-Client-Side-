import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
           
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TUTOR FINDER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="ms-auto">
                                <Nav.Link href="#deets">Teacher Home</Nav.Link>
                                <Nav.Link href="#deets">Add-New-Teacher</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                   Teacher Status</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;