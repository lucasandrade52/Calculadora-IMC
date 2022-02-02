import { useState } from 'react';
import './app.css'

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [message, setMessage] = useState('');

  function calculateIMC() {
    const alt = height / 100;
    const imc = weight / (alt * alt)

    if (imc < 18.6) {
      setMessage("Você está abaixo do seu peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage("Peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMessage("Cuidado, você está em níveis de obesidade! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateIMC}>
          Calcular
        </button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}