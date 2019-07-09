import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Menu</Nav.Link>
            <Nav.Link eventKey="link-2">Reserva</Nav.Link>
        </Nav>
    )
}

export default Navigation;