import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import dinner from '../assets/images/icons/romantic-dinner.png';
import rings from '../assets/images/icons/wedding-rings.png';
import weddance from '../assets/images/icons/wedding-dance.png';
import trombone  from '../assets/images/icons/trombone.png'
import cheers from '../assets/images/icons/cheers.png'






const timelineData = [
    { icon: rings, time: "2 PM" },
    { icon: cheers, time: "4 PM" },
    { icon: weddance, time: "6 PM" },
    { icon: dinner, time: "7 PM" },
    { icon: trombone, time: "8 PM" }
];

 // Array of objects containing the dynamic content for each card
 const events = [
    {
      title: '8:00 AM - Morning Session',
      text: 'Start your day with a productive meeting or task.',
    },
    {
      title: '9:00 AM - Breakfast',
      text: 'Catch up with the team on ongoing projects and tasks.',
    },
    {
      title: '10:00 AM - Practice',
      text: 'Interactive session to enhance team skills and knowledge.',
    },
    {
      title: '11:00 AM - Make up',
      text: 'Discuss project progress and resolve any issues with the client.',
    },
    {
      title: '12:00 PM - Lunch Break',
      text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '1:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '2:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '3:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '4:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '5:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '6:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '7:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '8:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
    {
        title: '9:00 PM - Lunch Break',
        text: 'Take a break and recharge for the afternoon.',
    },
];


const WeddingEvent = () => {
  return (
    <div id = "wedding-event">
        <Container fluid>
            <Row>
                <Col md={12}>
                    <div className= "title-header-template">
                        Wedding Event
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className="wedding-info-container bg-stardust-white">
            <Row>
                <Col md={1}></Col>
                <Col md={4}>
                <h1 className="text-align-center margin-top-50"> Wedding Timeline </h1>
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? 'right' : 'left'}`} key={index}>
                        <div className="content">
                            <div className="icon">
                            <img className = "img-responsive img-size-sm" src={item.icon} />
                            </div>
                            <div className="content-sett">{item.time}</div>
                        </div>
                        </div>
                    ))}
                    </div>
                </Col>
                <Col md={6}>
                    <Card className="wed-details-timeline">
                        <h1 className="text-align-center margin-top-50 secondary-rustic-color"> Wedding Schedule Details </h1>
                        <Row >
                            {events.map((event, index) => (
                                <Col md={6} key={index}>
                                    <Card.Body>
                                    <Card.Title className="mb-2 card-title-custom">{event.title}</Card.Title>
                                    <Card.Text className="card-text-custom">{event.text}</Card.Text>
                                    </Card.Body>
                                </Col>
                                ))}
                        </Row>
                    </Card>
                    
                </Col>
                <Col md={1}>
                </Col>
            </Row>
        </Container>
        </div>
  );
};

export default WeddingEvent;