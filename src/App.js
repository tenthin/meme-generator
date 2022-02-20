import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x => x.json().then(response => response.data.memes))
  },[])

  return (
    <div className="App">
      meme-generator
    </div>
  );
}

export default App;
