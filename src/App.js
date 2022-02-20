import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [templates, setTemplates] = useState([]);
  const [template,setTemplate] = useState(null)

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x => 
      x.json().then(response => setTemplates(response.data.memes)
    ))
  },[])

  return (
    <div className="App" style={{textAlign: 'center'}}>
      {!template && 
        templates.map(template => {
          return(
            <img 
              style={{width:200}} 
              key={template.id} 
              src={template.url} 
              alt={template.name}
              onClick={() => {
                setTemplate(template)
              }}
            />
          )
        })}
    </div>
  );
}

export default App;
