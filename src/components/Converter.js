import React from 'react';
import './Converter.css';

const Converter = ({ title, inputLabel, resultLabel, convertFunction }) => {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleConvert = () => {
    const inputValue = parseFloat(input);
    const convertedValue = convertFunction(inputValue);
    setResult(convertedValue);
  };

  return (
    <div className="converter">
      <h1>{title}</h1>
      <div className="input-container">
        <label>{inputLabel}</label>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div className="result-container">
        <label>{resultLabel}</label>
        <input type="text" value={result} readOnly />
      </div>
    </div>
  );
};

export default Converter;
