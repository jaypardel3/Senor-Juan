import React from 'react';
import { Container, Row, Col, Button, ButtonToolbar, Carousel } from 'react-bootstrap';
import './Menu.scss';
import whitecloth from '../img/whitecloth.png';
import leaves from '../img/leaves.png';
import boardwithspices from '../img/boardwithspices.png';
import logored from '../img/logored.png';
import sauced from '../img/saucedbeef.png';

const Menu = () => {
    return (
        <div>
            <Container fluid={true} className='menu-img2'>
                <Row>
                    <Col>
                        <img className='cloth2' src={whitecloth} alt='cloth' />
                        <img className='leaves2' src={leaves} alt='leaves' />
                        <img className='logomenu2' src={logored} alt='logomenu' />
                        <img className='beef3' src={sauced} alt='beef' />
                    </Col>
                </Row>
                <Container fluid={true} className="titletext">
                    <h1 className='menupage__header'>Descubre nuestro menu</h1>
                    <div className='menupage_divider'></div>
                    <div className='menupage__header2'>Our Menu</div>
                </Container>
            </Container>
            <Container fluid={true} className='menuproper'>

            </Container>
        </div>
    )
}

export default Menu;