
import React from 'react';
import NavHeader from './NavHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Countdown from './Countdown';


const targetDate = "2025-02-14T23:59:59"; // Target date and time

const WeddingHeader = () => {
    return (
    /* Header */
    <div className="head">
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Card className="custom-card-outline countdown-card bg-stardust-white">
                        <Card.Body className="countdown-body">
                            <Card.Text>
                                 <p className="text-align-center font-quick-sans font-style-italic font-size-18"> We Are Getting Married</p>
                                <Countdown targetDate={targetDate}/>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                <div className="headerobjectswrapper">
                    <header className="header" >James & Apple Wedding</header>
                </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
        <div className="subhead">
            <NavHeader/>
        </div>
    </div>
    );
};
export default WeddingHeader;