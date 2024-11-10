import React from 'react';
import logobox from '../assets/images/Logo-Box.png';
import Countdown from './Countdown';
import AudioPlayer from './AudioPlayer';
import song from '../assets/audio/palagi.mp3'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/countdown.css';
import { Container } from 'react-bootstrap';
import chapel from '../assets/images/chapel.png';
import reception from '../assets/images/reception.png';
import RsvpButton from './RSVPButton';


const WeddingBanner = () => {
  return (
    <div className="wedding-banner border-rustic column-box-1 bg-stardust-white ">
      <div className="details">
            <p className="text-align-center font-uppercase font-quick-sans font-size-32"> A <span className="font-weight-bold">Decade</span> of Love, A <span className="font-weight-bold">Lifetime</span> to Go</p>
      </div>
      {/* <AudioPlayer src={song} /> */}
      <div className="heart-container">
        <img 
          src = {logobox}
          alt="Heart" 
          className="heart-image" 
        />
      </div>
      <Container fluid>
        <Row>
            <Col md={12}>
            <p className="text-align-center font-quick-sans janda-font"> James <span className="font-sacramento"> and </span> Apple </p>
            </Col>
        </Row>
      </Container>
      <Row>
        <Col md={11}></Col>
        <Col md={1}>
           
        </Col>
      </Row>
      <Row>
        <Col md={12}>
            <div className="details">
                    <div className= "margin-bottom-95">
                        <p className="text-align-center font-quick-sans font-size-25 letter-spacing"> Together with our families, we cordially invite you to a celebration of life and love in Sacrament of  Matrimony</p>
                    </div>
            </div>
        </Col>
      </Row>
      <Container fluid style={{marginBottom: '10px'}}>
      <Row>
        <Col md={2}>
            <div className="border-top-bottom">
                <p className="text-align-center black-color"> Saturday </p>
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
            <p className="text-align-center black-color"> At 2PM </p>
        </div>

        <div className="vertical-line-container"> </div>
        </Col>
        <Col md={6}>
           <div className='chapel-container'>
                <p className="head-banner-month"> Chapel on the Hill </p>
                <p className="text-align-center font-quick-sans margin-top-neg-22"> Calaca, Batangas </p>
                <div className ="position-relative">
                    <img src={chapel} alt="Responsive Image" className="img-fluid custom-image chapel-img-pos" />
                </div>
           </div>
        </Col>
      </Row>
      </Container>
      <Container fluid>
        <Row>
            <Col md={4}>
                <div className ="position-relative">
                    <img src={reception} alt="Responsive Image" className="img-fluid custom-image" />
                </div>
            </Col>
            <Col md={8}>
            <p className="text-align-center font-quick-sans margin-top-30"> Reception immediately follows at <span className="font-weight-bold"> LEANEL'S GARDEN,</span> Daang Luma Road, Kaybagal North, Tagaytay City </p>
            </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
            <Col md={4}></Col>;
            <Col md={4}>
               <RsvpButton/>
            </Col>
            <Col md={4}></Col>;
        </Row>
      </Container>
    </div>
  );
};

export default WeddingBanner;