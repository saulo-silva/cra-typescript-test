import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props: any) {
  return <button {...props}/>
}

function App() {
  const [option, setOption] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Button>Delete</Button>

        <label htmlFor="select-example">Items</label>
        <select id="select-example" className="select-values" onChange={(e) => setOption(e.target.value)}>
          {[1, 2, 3, 4, 5].map((item) => <option value={item} key={`item${item}`}>Value {item}</option>)}
        </select>

        {option && `Mostra ${option}`}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
