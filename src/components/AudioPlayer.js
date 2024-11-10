import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Start with audio paused
  const audioRef = useRef(new Audio(src));

  // Set loop attribute but delay play until user interaction
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Enable looping

    // Cleanup on component unmount
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset playback
    };
  }, [src]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      // Attempt to play the audio on user interaction
      audio.play().catch(error => {
        console.log('Playback failed due to autoplay restrictions:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <Button
        onClick={togglePlayPause}
        className="audio-btn btn-lg"
      >
        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
      </Button>
    </div>
  );
};

export default AudioPlayer;