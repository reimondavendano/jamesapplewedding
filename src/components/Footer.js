import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import qrrsvp from '../assets/images/rsvp.png';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackToTop from './BackToTop';


function Footer() {
    return (
        <div id = "footer" className="footer">
             <Container fluid >
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h1 className="text-align-center margin-top-50"> Snap & Share </h1>
                            <div className="snap-icons">
                                <div className="content-icon2">
                                    <div className="icon-class2">
                                        <FontAwesomeIcon  icon={faFacebook} size="lg" />
                                    </div>
                                </div>
                                <div className="content-icon2">
                                    <div className="icon-class2">
                                        <FontAwesomeIcon  icon={faInstagram} size="lg" />
                                    </div>
                                </div>
                                <div className="content-icon2">
                                    <div className="icon-class2">
                                        <FontAwesomeIcon  icon={faTiktok} size="lg"  />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-align-center font-quick-sans font-style-italic font-size-18"> Help us captured and share our precious moments using our official wedding hashtag</p>
                                <p className="text-align-center margin-top-30 font-quick-sans font-size-bold font-size-18 third-rustic-color"> #abeautAPPLElovestorywithJAMES</p>
                                <p className="text-align-center font-quick-sans margin-top-neg-20 font-size-bold font-size-18 third-rustic-color"> #JAMESfoundhAPPLEyeverafter</p>
                            </div>
                        </Col>
                    <Col md={2}>
                        <BackToTop/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
