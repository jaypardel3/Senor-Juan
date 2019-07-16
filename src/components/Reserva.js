import React from 'react';
import { Container, Row, Col, Button, ButtonToolbar, Carousel } from 'react-bootstrap';
import './Menu.scss';
import whitecloth from '../img/whitecloth.png';
import leaves from '../img/leaves.png';
import boardwithspices from '../img/boardwithspices.png';
import logored from '../img/logored.png';
import sauced from '../img/saucedbeef.png';

const Reserva = () => {
    return (
        <div>
            <Container fluid={true} className='reserva-img'>
                <Row>
                    <Col>
                        <img className='cloth' src={whitecloth} alt='cloth' />
                        <img className='leaves' src={leaves} alt='leaves' />
                        <img className='board' src={boardwithspices} alt='board' />
                        <img className='logomenu' src={logored} alt='logomenu' />
                        <img className='beef' src={sauced} alt='beef' />
                    </Col>
                </Row>
                <Container fluid={true} className="titletext">
                    <h1>Descubre nuestro menu</h1>

                </Container>
            </Container>
        </div>
    )
}

export default Reserva;