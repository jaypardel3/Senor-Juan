import React from 'react';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './Menu.scss';
import whitecloth from '../img/whitecloth.png';
import leaves from '../img/leaves.png';
import boardwithspices from '../img/boardwithspices.png';
import logored from '../img/logored.png';
import sauced from '../img/saucedbeef.png';
import {menuList} from './menudata';




    


const Menu = () => {

    let peopleList = menuList.map(person => 
        <Col xs={4}>
            <div>{person.name}</div>
            <div>{person.price}</div>
        </Col>
        )
    
    return (
        <div>
            <Container fluid={true} className='menu-img2'>
                <Row>
                    <Col>
                        <img className='cloth2' src={whitecloth} alt='cloth' />
                        <img className='leaves2' src={leaves} alt='leaves' />
                        <img className='logomenu2' src={logored} alt='logomenu' />
                        <img className='beef3' src={sauced} alt='beef' />
                        <img className='board3' src={boardwithspices} alt='board3' />
                    </Col>
                </Row>
                <Container fluid={true} className="titletext">
                    <h1 className='menupage__header'>nuestro menú</h1>
                    <ButtonToolbar>
                        <Button variant="outline-danger" className="discover">Discover</Button>
                    </ButtonToolbar>
                    
                </Container>
            </Container>
            <Container fluid={true} className='menuproper'>
                <Row>
                    {peopleList}
                </Row>
            </Container>
        </div>
    )
}

export default Menu;