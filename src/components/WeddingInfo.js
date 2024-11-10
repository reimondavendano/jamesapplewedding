import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/images/info-image/1.png';
import img2 from '../assets/images/info-image/2.png';
import img3 from '../assets/images/info-image/3.png';
import img4 from '../assets/images/info-image/4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import QRGen from './QRGen';
import maps from '../assets/images/map.png';

const mapsUrlLeanel = "https://www.google.com/maps/place/Leanel's+Garden+Events+Place,+Rd,+Daang+Luma,+Tagaytay,+4120+Cavite/@14.1204223,120.9355974,19z/data=!4m6!3m5!1s0x33bd77cba8875809:0xaaea4a7b375462cb!8m2!3d14.121117!4d120.9351446!16s%2Fg%2F11h6qdxr5l"; // Replace with your actual Maps link
const mapsUrlChapel = 'https://www.google.com/maps/place/Don+Bosco+Chapel+on+the+Hill/@14.0575893,120.8368453,19z/data=!4m6!3m5!1s0x33bd9c26637ae0a1:0x469e957a8a28f790!8m2!3d14.0574537!4d120.8360742!16s%2Fg%2F1hc3jvf30?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D'; // Replace with your actual Maps link

const WeddingInfo = () => {
  return (
    <div id = "wedding-info">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <div className= "title-header-template">
                            Wedding Information
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-stardust-white">
                <Row>
                    <Col md={2}>

                    </Col>
                    <Col md={4} style={{zIndex: 4}}>
                        <h1 className="text-align-center margin-top-50"> Attire </h1>
                            <Row>
                                <Col md={6}>
                                   <Row>
                                    <Col md ={12}>
                                        <div className = "margin-top-30">
                                            <p className="text-align-center font-quick-sans font-style-italic font-size-25"> Polo or Long Sleeve </p>
                                            <p className="text-align-center margin-top-neg-22 font-quick-sans font-style-italic font-size-18"> for the gentlemen</p>
                                        </div>
                                    </Col>
                                   </Row>

                                   <Row>
                                    <Col md ={12}>
                                        <div className = "margin-top-30">
                                            <p className="text-align-center font-quick-sans font-style-italic font-size-25"> Cocktail or Long Dress </p>
                                            <p className="text-align-center margin-top-neg-22 font-quick-sans font-style-italic font-size-18"> for the ladies</p>
                                        </div>
                                    </Col>
                                   </Row>
                                    
                                   <Row>
                                    <Col md ={12}>
                                        <div className = "margin-top-30">
                                            <p className="text-align-center margin-top-neg-22 font-quick-sans font-style-italic font-size-18"> Dress fabulously in shade of rust champagne or earth tone color.</p>
                                        </div>
                                    </Col>
                                   </Row>

                                   <Row>
                                    <Col md ={12}>
                                        <div class="color-palette">
                                            <div className="color-circle" style={{backgroundColor: '#6D0613'}}></div>
                                            <div className="color-circle" style={{backgroundColor: '#773429'}}></div>
                                            <div className="color-circle" style={{backgroundColor: '#C17D4F'}}></div>
                                            <div className="color-circle" style={{backgroundColor: '#A16E5A'}}></div>
                                            <div className="color-circle" style={{backgroundColor: '#D4AC98'}}></div>
                                            <div className="color-circle" style={{backgroundColor: '#4E5151'}}></div>
                                        </div>
                                    </Col>
                                   </Row>
                                    
                                </Col>
                                <Col md={6}></Col>
                            </Row>
                    </Col>
                    <Col md={2} className="position-relative">
                        <img src={img3} alt="Responsive Image" className="img-fluid position-absolute custom-image img-3-template" />
                        <img src={img4} alt="Responsive Image" className="img-fluid position-absolute custom-image img-4-template" />
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={8}>
                        <h1 className="text-align-center margin-top-50"> Snap & Share </h1>
                            <div className="snap-icons">
                                <div className="content-icon">
                                    <div className="icon-class1">
                                        <FontAwesomeIcon  icon={faFacebook} size="lg" />
                                    </div>
                                </div>
                                <div className="content-icon">
                                    <div className="icon-class1">
                                        <FontAwesomeIcon  icon={faInstagram} size="lg" />
                                    </div>
                                </div>
                                <div className="content-icon">
                                    <div className="icon-class1">
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
                </Row>
                <Row>

                    <Col md={2}></Col>
                    <Col md={4}>
                        <h1 className="margin-top-50 text-align-center"> Gift Guide </h1>
                        <p className="text-align-center font-quick-sans font-style-italic font-size-18"> With all that we have, we've been truly blessed. Your presence and prayers are all requested</p>
                        <p className="text-align-center font-quick-sans font-style-italic font-size-18"> But if you desire to give nonetheless, monetary gift is one we humbly suggest</p>
                    </Col>
                    <Col md={6}></Col>
                    
                </Row>
                <Row>
                    <Col md={12}>
                        <h1 className="margin-top-50 text-align-center"> Map Location </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}></Col>
                    <Col md={4} className="position-relative">
                        <img src={maps} alt="Responsive Image" className="img-fluid custom-image map-size-mb" />
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    
                    <Col md={2}></Col>
                    <Col md={2}>
                        <QRGen mapsUrl={mapsUrlChapel}/>
                        <p className="text-align-center font-quick-sans font-style-italic font-size-18"> Chapel on the hill </p>
                    </Col>
                    <Col md={2}>
                        <QRGen mapsUrl={mapsUrlLeanel}/>
                        <p className="text-align-center font-quick-sans font-style-italic font-size-18"> Leanel's Garden </p>

                    </Col>
                    <Col md={6}></Col>
                </Row>
                
            </Container>
        </div>
  );
};

export default WeddingInfo;