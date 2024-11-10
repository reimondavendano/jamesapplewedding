import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { QRCodeCanvas }  from 'qrcode.react';
import rsvpImg from '../assets/images/7.jpeg';

const rsvpform = "https://docs.google.com/forms/d/e/1FAIpQLScnYfvdYuqF2xRt4V3g1HkJeJZgj3buR3gckQzFZ_oARNijPg/viewform"

function RSVP() {
    return (
        <div id = "rsvp">
             <Container fluid>
                <Row>
                    <Col md={12}>
                        <div className= "title-header-template">
                            RSVP
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-stardust-white">
                <Row className="justify-content-center margin-top-50">
                    <Col md={1}></Col>
                    <Col md={4}>
                         <div className = "rsvpContainer">
                            <div className = "rsvpLabel">
                                <h1>Are You Attending?</h1>
                                <p className="text-align-center font-quick-sans font-style-italic font-size-18">Please kindly scan to this QR Code and send your RSVP as soon as you can. Thank you.</p>
                            </div>
                            <div className = "rsvpWrapper">
                            <QRCodeCanvas  
                                value={rsvpform} 
                                size={200} 
                                fgColor="#3d3d3d" /* Darker color for QR code */
                                bgColor="#f9f5f1" /* Light background */
                                level="H" 
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="position-relative">
                        <img src={rsvpImg} alt="Responsive Image" className="img-fluid rsv-img" />
                        <div className="overlay"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RSVP;
