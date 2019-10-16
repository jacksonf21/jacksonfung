import React, { useState, useReducer } from 'react';
import './styles/App.css';
import Main from './components/main.component';
import Side from './components/side.component';

function App() {
  const [state, setState] = useState(
    {
      selection: null,
      content: null,
      title: 'default'
    }
  );

  return (
    <main className='app-container'>
      <Main />
      <Side />
    </main>
  );
}

export default App;
