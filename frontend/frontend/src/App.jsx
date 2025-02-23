import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Načítám...');

  useEffect(() => {
    fetch('https://adp-voicesin.onrender.com/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage('Chyba při načítání backendu'));
  }, []);

  return (
    <div className="container">
      <h1>React Frontend</h1>
      <p>Odpověď z backendu: {message}</p>
    </div>
  );
}

export default App;
