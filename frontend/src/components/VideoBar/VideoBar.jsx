import React, { useEffect, useRef, useState } from 'react';
import './VideoBar.css';

export default function VideoBar(props) {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeUp = () => {
    if (audioRef.current.volume < 1.0) {
      audioRef.current.volume += 0.1;
    }
  };

  const handleVolumeDown = () => {
    if (audioRef.current.volume > 0.0) {
      audioRef.current.volume -= 0.1;
    }
  };

  useEffect(() => {
    audioRef.current.src = props.source;
    audioRef.current.play();
    setIsPlaying(true);
    return () => {
      audioRef.current.pause();
    };
  }, [props.source]);

  return (
    <nav className="videoBar navbar navbar-expand-lg ">
      <span className="material-symbols-outlined">album</span>
      <span>Música Tocando</span>
      <button onClick={handleAudioPlayPause} className='btn'>
        <span className="material-symbols-outlined">
          {isPlaying ? 'pause' : 'play_arrow'}
        </span>
      </button>
      <button onClick={handleVolumeDown} className='btn'>
        <span className="material-symbols-outlined">volume_down</span>
      </button>
      <button onClick={handleVolumeUp} className='btn'>
        <span className='material-symbols-outlined'>volume_up</span>
      </button>
    </nav>
  );
}