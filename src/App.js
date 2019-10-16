import React, { useState, useReducer } from 'react';
import Main from './components/main.component';
import Side from './components/side.component';
import './styles/App.css';

import reducer, {
  SET_SKILLS,
  SET_DESCRIPTION
} from './helper/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, {
    description: null,
    content: null,
    title: 'default'
  });

  const selectContent = () => {
    dispatch({ type: SET_SKILLS });
  };

  return (
    <main className='app-container'>
      <Main 
        description={state.description}
      />
      <Side 
        content={state.content}
        onClick={selectContent}
      />
    </main>
  );
}

export default App;
