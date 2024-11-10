import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WeddingTimeline from './WeddingTimeline';

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className="flip-container">
      <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
            <Row>
                <Col md={12}>
                    <WeddingTimeline/>
                </Col>
                
            </Row>
        </div>
        <div className="back">
          <h1>Back Page</h1>
          <p>Details continue on the back of the rustic newspaper.</p>
        </div>
      </div>
      <button className="flip-button" onClick={handleFlip}>
        {isFlipped ? 'View Front' : 'View Back'}
      </button>
    </div>
    );
  };
  
  export default FlipCard;