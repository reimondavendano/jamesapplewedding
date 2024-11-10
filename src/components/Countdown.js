import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, [targetDate]);
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) return;
      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval]} {interval}{' '}
        </span>
      );
    });
  
    return (
        <div className="countdown">
            {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="countdown-segment">
                <span className="countdown-value">{timeLeft[interval] || 0}</span>
                <span className="countdown-label">{interval}</span>
            </div>
            ))}
      </div>
    );
  };
  
  export default Countdown;