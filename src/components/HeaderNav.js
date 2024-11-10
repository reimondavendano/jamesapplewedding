import React, { useEffect, useState } from 'react';


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
import NavHeader from './NavHeader';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Countdown from './Countdown';
import chapel from '../assets/images/chapel.png';
import reception from '../assets/images/reception.png';


const targetDate = "2025-02-14T23:59:59"; // Target date and time

const images = [
    ja1,ja2,ja3,ja4,ja5,ja6,ja7,ja8,ja9,ja10
];


function HeaderNav() {
  const [offset, setOffset] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Change image at regular intervals for the carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className ="homepage">
      <NavHeader/>
      <div className = "overlay"></div>
      
      {/* Parallax Header with Carousel */}
      <header
        className="parallax-header"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
          backgroundPositionY: offset * 0.5,
        }}
      >
      <Container fluid className="above-layer">
        <Row>
            <Col md={12}>
            <p className="text-align-center font-quick-sans janda-font"> James <span className="font-sacramento"> and </span> Apple </p>
            </Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <p className="text-align-center font-quick-sans font-sacramento-only font-size-60 white-color"> We Are Getting Married</p>
            <Countdown targetDate={targetDate}/>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className='width-bottom-head'>
          <Col md={2}>
              <div className="border-top-bottom">
                  <p className="text-align-center white-color"> Saturday </p>
              </div>
          </Col>
          <Col md={2}>
              <div className="mdy-banner">
                  <p className="head-banner-month"> February </p>
                  <p className="head-banner-date"> 8 </p>
                  <p className="head-banner-year"> 2025 </p>
              </div>
          </Col>
          <Col md={2}>
          <div className="border-top-bottom">
              <p className="text-align-center white-color"> At 2PM </p>
          </div>

          </Col>
          <Col md={6}>
            <div className='chapel-container'>
                  <p className="head-banner-month"> Chapel on the Hill </p>
                  <p className="text-align-center font-quick-sans margin-top-neg-22 white-color font-size-18"> Calaca, Batangas </p>
            </div>
          </Col>
        </Row>
      </Container>
      
      </header>
     
    </div>
  );
}

export default HeaderNav;