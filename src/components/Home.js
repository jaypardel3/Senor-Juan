import React from 'react';
import { Container, Row, Col, Button, ButtonToolbar, Carousel } from 'react-bootstrap';
import './Home.scss';
import whitecloth from '../img/whiteclothh.png';
import leaves from '../img/leavess.png';
import boardwithspices from '../img/boardwithspicess.png';
import logored from '../img/logoredd.png';
import sauced from '../img/saucedbeef.png'
import place from '../img/place.jpg';
import tomato from '../img/tomatoo.png';
import beef2 from '../img/beef.JPG';
import squid from '../img/squid.JPG';
import peas from '../img/greenpeass.png';
import peas2 from '../img/greenpeas22.png';
import knife from '../img/knifewithgarlicc.png';
import orange1 from '../img/orangefood1.png';
import orange2 from '../img/orangefood2.png';
import chili from '../img/chilii.png';
import logowhite from '../img/logowhitee.png';
import cig from '../img/cig.png'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import divider from '../img/divider.png';


const data = {
    "data-top-bottom": "transform: translateY(-15rem);",
    "data-bottom-top": "transform: translateY(15rem);",
};

const data2 = {
    "data-start": "transform: translateY(0rem);",
    "data-100-end": "transform: translateY(80rem);",
};

const data3 = {
    "data-start": "transform: translateY(0rem);",
    "data-100-end": "transform: translateY(35rem);",
};

const data4 = {
    "data-start": "transform: translateY(0rem);",
    "data-100-end": "transform: translateY(20rem);",
};

const data5 = {
    "data-start": "transform: translateY(0rem);",
    "data-100-end": "transform: translateY(200rem);",
};

const Home = () => {
    return (
        <div>
            <Container fluid={true} className='section--header'>
                <Row>
                    <Col className='header__objects'>

                        <img className='header__objects--leaves' src={leaves} alt='leaves' />
                        <Parallax data={data2}>
                            <span><img className='header__objects--board' src={boardwithspices} alt='board' /></span>
                        </Parallax>
                        <Parallax data={data3}>
                            <img className='header__objects--cloth' src={whitecloth} alt='cloth' />
                        </Parallax>
                        <Parallax data={data4}>
                            <img className='header__objects--beef' src={sauced} alt='beef' />
                        </Parallax>

                    </Col>
                    <Col className="header__textbox">
                        <Parallax data={data5}>
                            <img className='header__objects--logo' src={logored} alt='logo' />
                            <h1 className='heading--primary'>Bienvenido&nbsp;<span className='contrast'>al</span></h1>
                            <div className='heading--secondary'>señor juan</div>
                            <img className='heading--divider' src={divider} alt='divider' />
                            <ButtonToolbar>
                                <Button variant="outline-danger" className="btn--reserve">Reserve a Table</Button>
                            </ButtonToolbar>
                        </Parallax>

                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className='section--story'>
                <Row>
                    {/* <Col xs={1}></Col>
                    <Col xs={3}><img className='story__place' src={place} alt='place' /></Col>
                    <Col xs={7}>
                        <div className='story__box'>
                            <div className='story__proper'>
                                <div className='story__proper--heading'>Since 2016</div>
                                <div className='story__proper--divider'></div>
                                <p className='story__proper--description'>Senor Juan Bistro is a destination for the senses! This Bistro offers delectable Spanish-Filipino Cuisine such as pastas, tapas, chorizos which are the best in town and would surely satisfy your appetite. It is a cozy, inviting, and family friendly restaurant close to the heart of Dumaguete City promising to delight both gourmands and casual eaters alike.</p>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
            <Container fluid={true} className='menu-img'>
                <Row className='menu'>
                    <Col xs={11}></Col>
                    {/* <Parallax data={data} >
                        <span><Col xs={1}><img className='tomato' src={tomato} alt='tomato' /></Col></span>
                    </Parallax> */}

                </Row>
                <Row className='menu'>
                    <Col xs={4}>
                        {/* <img className='beef2' src={beef2} alt='beef' />
                        <img className='squid' src={squid} alt='squid' /> */}
                        <div className='backbox'></div>
                    </Col>
                    <Col xs={8}>
                        <div className='blackbox'></div>
                        {/* <img className='peas' src={peas} alt='peas' /> */}
                        <div className='menu__proper'>
                            <div className='menu__header'>
                                <div>Senor Juan</div>
                                <div>Menu</div>
                            </div>
                            <div className='menu__divider'></div>
                            <div className='menu__text'>People want authentic, flavourful food, not some show-off meal that takes days to prepare. </div>
                            <ButtonToolbar>
                                <Button variant="outline-danger" className="menu__button">See Menu</Button>
                            </ButtonToolbar>
                        </div>
                    </Col>
                </Row>
                <Row className='menu'>
                    <Col xs={8}>
                        <div className='blackbox2'></div>
                        {/* <img className='knife' src={knife} alt='knife' />
                        <img className='peas2' src={peas2} alt='peas2' />
                        <img className='orange1' src={orange1} alt='orange1' />
                        <img className='orange2' src={orange2} alt='orange2' /> */}
                        <div className='reserve__proper'>
                            <div className='reserve__header'>
                                <div>Looking for a great</div>
                                <div>place to dine?</div>
                            </div>
                            <div className='reserve__divider'></div>
                            <div className='reserve__text'>One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating.</div>
                            <ButtonToolbar>
                                <Button variant="outline-danger" className="reserve__button">Reserve Now!</Button>
                            </ButtonToolbar>
                        </div>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
                <Row className='menu'>
                    {/* <Col xs={1}><img className='chili' src={chili} alt='chili' /></Col> */}
                    <Col xs={11}></Col>
                </Row>
            </Container>
            <Container fluid={true} className='testi-img'>
                <Row className='testi'>
                    <Col xs={1}></Col>
                    <Col xs={7}>
                        <div className='testimonials'>
                            <Carousel indicators={false} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
                                <Carousel.Item className='review'>
                                    <h2 className='testimonials__first d-block w-100'>Everything's awesome in this restaurant! Great job Kim and team!</h2>
                                    <h3 className='testimonials__reviewer'>- Daphney Fortich</h3>
                                </Carousel.Item>
                                <Carousel.Item className='review'>
                                    <h2 className='testimonials__first d-block w-100'>Great food, very polite staff, comfy place. Overall its a great place to dine. Definitely coming back here!</h2>
                                    <h3 className='testimonials__reviewer'>- Kristian Surban</h3>
                                </Carousel.Item>
                                <Carousel.Item className='review'>
                                    <h2 className='testimonials__first d-block w-100'>Happened to be walking by and found this place. My first visit to Dumaguete and so glad we found this bistro. The staff are excellent and the food amazing...already planning my next visit!</h2>
                                    <h3 className='testimonials__reviewer'>- Scott Graham</h3>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <h1 className='testimonials__heading'>What our customers are saying...</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className='contact-img'>
                <Row className='contact'>
                    <Col xs={3} className='contact__box'>
                        <h2 className='contact__heading'>Contact</h2>
                        <h3 className='contact__text'>+63 917 133 5595</h3>
                        <h3 className='contact__text'>sarena.villanueva@gmail.com</h3>
                    </Col>
                    <Col xs={3} className='contact__box'>
                        <h2 className='contact__heading'>Address</h2>
                        <h3 className='contact__text'>+50 E.J Blanco Piapi</h3>
                        <h3 className='contact__text'>Dumaguete City 6200</h3>
                    </Col>
                    <Col xs={3}></Col>
                    <Col xs={3} className='contact__box'>
                        <h2 className='contact__heading'>Social</h2>
                    </Col>
                </Row>
                <Row className='contact'>
                    <Col xs={3}><img className='logowhite' src={logowhite} alt='logowhite' /></Col>
                    <Col xs={6}><h2 className='contact__designer'>Copyright © 2019. Built by Jay Pardel</h2></Col>
                    <Col xs={3}></Col>
                </Row>
            </Container>

        </div>


    )
}

export default Home;