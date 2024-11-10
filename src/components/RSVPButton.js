import React from "react";
import { Button } from "react-bootstrap";

const RsvpButton = () => {
  return (
    <Button 
      style={{
        backgroundColor: "#CC5315",
        color: "#fff",
        width: "100px",      // Adjust the width for a large button
        height: "100px",     // Adjust the height for a large button
        borderRadius: "50%", // Makes the button circular
        alignItems: "center",
        justifyContent: "center",
        border: "none"       // Removes the default border
      }}
    >
      <a className="white-color font-family-quicksand text-align-center font-weight-bold font-size-25 rsvp-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScnYfvdYuqF2xRt4V3g1HkJeJZgj3buR3gckQzFZ_oARNijPg/viewform">RSVP</a>
    </Button>
  );
};

export default RsvpButton;