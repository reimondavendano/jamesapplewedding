// src/HomePage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  WeddingCarousel  from './WeddingCarousel';
import  ja1  from '../assets/images/1.jpeg'
import  ja2  from '../assets/images/2.jpeg'
import  ja3  from '../assets/images/3.jpeg'
import  ja4  from '../assets/images/4.jpeg'
import  ja5  from '../assets/images/5.jpeg'
import  ja6  from '../assets/images/6.jpeg'
import  ja7  from '../assets/images/7.jpeg'
import  ja8  from '../assets/images/8.jpeg'
import  ja9  from '../assets/images/9.jpeg'
import  ja10  from '../assets/images/10.jpeg'
import BackgroundCarousel from './BackgroundCarousel';
import Countdown from './Countdown';
import FlipCard from './FlipCard';
import WeddingTimeline from './WeddingTimeline';
import WeddingBanner from './WeddingBanner';

const images = [
    ja1,ja2,ja3,ja4,ja5,ja6,ja7,ja8,ja9,ja10
];

const WeddingHomePage = () => {
  return (
    <div id="home">
      {/* Content */}
      <Container fluid>
          <Row>
            <Col md={4}>
              <WeddingBanner/>
            </Col>
            <Col md={12}>
              <BackgroundCarousel images={images} interval={5000}/>
            </Col>
          </Row>
      </Container>

    </div>

  );
};

export default WeddingHomePage;