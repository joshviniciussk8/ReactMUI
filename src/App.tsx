import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>hello word</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count {count}
      </button>
    </>
    
  );
}

export default App;
