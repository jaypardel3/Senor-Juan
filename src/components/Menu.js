import React from 'react';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './Menu.scss';
import whitecloth from '../img/whitecloth.png';
import leaves from '../img/leaves.png';
import boardwithspices from '../img/boardwithspices.png';
import logored from '../img/logored.png';
import sauced from '../img/saucedbeef.png';
import { pica, merienda, pasta, salad, maincourse, dessert, sides, softdrinks, juicesandshakes, alcohol, cocktails } from './menudata';







const Menu = () => {

    let picaList = pica.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )

    let meriendaList = merienda.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )

    let pastaList = pasta.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )

    let saladList = salad.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )

    let maincourseList = maincourse.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )

    let dessertList = dessert.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )

    let sidesList = sides.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )
    let softdrinksList = softdrinks.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )
    let juicesandshakesList = juicesandshakes.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )
    let alcoholList = alcohol.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
        </Col>
    )
    let cocktailsList = cocktails.map(item =>
        <Col xs={4}>
            <div className='item__header'>{item.name}<span className='item__price'>{item.price}</span></div>
            <div className='item__description'>{item.des}</div>
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
            <Container fluid={true} className='picaMenu'>
                <h1 className='picapica'>PICA-PICA</h1>
                <hr></hr>
                <Row>
                    {picaList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>MERIENDA</h1>
                <hr></hr>
                <Row>
                    {meriendaList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>PASTA</h1>
                <hr></hr>
                <Row>
                    {pastaList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>SALAD</h1>
                <hr></hr>
                <Row>
                    {saladList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>MAIN COURSE</h1>
                <hr></hr>
                <Row>
                    {maincourseList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>DESSERT</h1>
                <hr></hr>
                <Row>
                    {dessertList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>SIDES</h1>
                <hr></hr>
                <Row>
                    {sidesList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>SOFTDRINKS</h1>
                <hr></hr>
                <Row>
                    {softdrinksList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>JUICES AND SHAKES</h1>
                <hr></hr>
                <Row>
                    {juicesandshakesList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>ALCOHOL</h1>
                <hr></hr>
                <Row>
                    {alcoholList}
                </Row>
            </Container>
            <Container fluid={true} className='meriendaMenu'>
                <h1 className='picapica'>COCKTAILS</h1>
                <hr></hr>
                <Row>
                    {cocktailsList}
                </Row>
            </Container>
            
        </div>
    )
}

export default Menu;