import React from 'react';
import { QRCodeCanvas }  from 'qrcode.react';

function QRGen({ mapsUrl }) {
  return (
    <div style={styles.qrContainer}>
      <div style={styles.label}>
        <h1>Join Us!</h1>
        <p style={styles.subtext}>Scan to view location</p>
      </div>
      <div style={styles.qrWrapper}>
        <QRCodeCanvas  
          value={mapsUrl} 
          size={200} 
          fgColor="#3d3d3d" /* Darker color for QR code */
          bgColor="#f9f5f1" /* Light background */
          level="H" 
        />
      </div>
    </div>
  );
}

// Rustic theme styles
const styles = {
  qrContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdf9f3',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid #d1c0a7',
    maxWidth: '300px',
    margin: '0 auto',
  },
  label: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  heading: {
    fontFamily: 'serif',
    fontSize: '24px',
    color: '#6b4e3d',
    margin: 0,
  },
  subtext: {
    fontFamily: 'cursive',
    color: '#8c725a',
    fontSize: '16px',
    margin: 0,
  },
  qrWrapper: {
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    border: '1px solid #d1c0a7',
    boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    marginTop: '15px',
    fontFamily: 'serif',
    fontSize: '14px',
    color: '#6b4e3d',
    textAlign: 'center',
  },
};

export default QRGen;
