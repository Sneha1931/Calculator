import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      const result = eval(input); // Using eval for simplicity, consider safer alternatives for production
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="input" value={input} readOnly />
      <div className="keypad">
        <div className="row">
          <Button onClick={handleClick} label="7" />
          <Button onClick={handleClick} label="8" />
          <Button onClick={handleClick} label="9" />
          <Button onClick={handleClick} label="/" />
        </div>
        <div className="row">
          <Button onClick={handleClick} label="4" />
          <Button onClick={handleClick} label="5" />
          <Button onClick={handleClick} label="6" />
          <Button onClick={handleClick} label="*" />
        </div>
        <div className="row">
          <Button onClick={handleClick} label="1" />
          <Button onClick={handleClick} label="2" />
          <Button onClick={handleClick} label="3" />
          <Button onClick={handleClick} label="-" />
        </div>
        <div className="row">
          <Button onClick={handleClick} label="0" />
          <Button onClick={handleClick} label="." />
          <Button onClick={clearInput} label="C" />
          <Button onClick={handleClick} label="+" />
        </div>
        <div className="row">
          <Button onClick={calculateResult} label="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

