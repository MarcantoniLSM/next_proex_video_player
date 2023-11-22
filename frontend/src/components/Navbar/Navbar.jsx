import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import VideoBar from '../VideoBar/VideoBar'

export default function Navbar(props) {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setAudioFile(URL.createObjectURL(file));
    }
  };

  return (
    <nav className="navbar-main navbar navbar-expand-lg">
      <span className="material-symbols-outlined">music_note</span>
      <span>Olá, usuário</span>
      <input type="file" id="fileInput" onChange={handleFileChange} />
      <button
        className="btn"
        onClick={() => document.getElementById('fileInput').click()}
      >
        <span className="material-symbols-outlined">upload</span>
      </button>
      {audioFile ? ( <VideoBar source = {audioFile}/>
      ) : (null)}
    </nav>
  );
}