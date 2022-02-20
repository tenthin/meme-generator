import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x => 
      x.json().then(response => setTemplates(response.data.memes)
    ))
  },[])

  return (
    <div className="App" style={{textAlign: 'center'}}>
      {templates.map(template => {
        return(
          <img key={template.id} src={template.url} alt={template.name} />
        )
      })}
    </div>
  );
}

export default App;
