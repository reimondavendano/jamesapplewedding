import React from 'react';
import ja1 from '../assets/images/6.jpeg';
import ja2 from '../assets/images/7.jpeg';
import ja3 from '../assets/images/8.jpeg';
import ja4 from '../assets/images/9.jpeg';
import aglow from '../assets/images/a-glow.png';
import jglow from '../assets/images/j-glow.png';
import { Chrono } from 'react-chrono';
import { Col, Container, Row } from 'react-bootstrap';


// Data for the timeline
const timelineData = [
  {
    title: "Rustic Beginnings",
    cardTitle: "Start of the Journey",
    cardSubtitle: "An old-school adventure",
    cardDetailedText: "This marks the start of an adventure filled with charm and heritage.",
    media: {
      type: "IMAGE",
      source: {
        url: ja1, // replace with your image URL
      },
    },
  },
  {
    title: "The Golden Days",
    cardTitle: "Memories Preserved",
    cardSubtitle: "Reliving the past",
    cardDetailedText: "Exploring the beauty and simplicity of the golden days.",
    media: {
      type: "IMAGE",
      source: {
        url: ja4, // replace with your image URL
      },
    },
  },
  {
    title: "Heritage Revisited",
    cardTitle: "Embracing the Tradition",
    cardSubtitle: "Old-world charm",
    cardDetailedText: "Keeping rustic traditions alive while moving forward.",
    media: {
      type: "IMAGE",
      source: {
        url: ja3, // replace with your image URL
      },
    },
  },
];

const WeddingTimeLine = () => {
  return (
    <Container fluid id="story">
        <Row>
            <Col md={12}>
                <div className= "title-header-template">
                    Our Story
                </div>
            </Col>
        </Row>
        <Row className="bg-stardust-white">
            <Col md={3} className="position-relative bg-sides">
                <img src={jglow} alt="Responsive Image" className="img-fluid position-relative custom-image margin-top-144 j-img" />
                <div className="speech-bubble j-speech">
                    Hi! I'm James Eduard Caluag.
                </div>
            </Col>
                
            <Col md={6}>
            <div className="timeline-container">
                <Chrono
                        items={timelineData}
                        mode="VERTICAL_ALTERNATING"
                        cardHeight={250}
                        cardWidth={300}
                        theme={{
                        primary: "#A47C48", // rustic brown
                        secondary: "#D1BCA3", // beige accent
                        cardBgColor: "#F5EAD6", // paper-like background
                        cardForeColor: "#4B3E2A", // dark brown text color
                        titleColor: "#4B3E2A", // title color
                        }}
                    hideControls={true}
                />
            </div>            
            </Col>


            <Col md={3} className="position-relative bg-sides">
                <img src={aglow} alt="Responsive Image" className="img-fluid position-relative custom-image margin-top-300 a-img" />
                <div className="speech-bubble a-speech">
                    Hello! I'm Angellie Pier Cruz.
                </div>
            </Col>

        </Row>

    </Container>
  );
};

export default WeddingTimeLine;