import React, { useEffect, useReducer, useState } from 'react';
import Main from './components/main.component';
import Side from './components/side.component';
import './styles/App.css';

import reducer, {
  SET_SKILLS,
  SET_DEFAULT,
  SET_PROJECTS,
  SET_ABOUT_ME
} from './helper/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, {
    title: null,
    description: null
  });

  const [select, setSelect] = useState(0);

  useEffect(() => {
    dispatch({ type: SET_DEFAULT });
  },[]);

  const addSelect = () => {
    const newSelect = select + 1;
    setSelect(newSelect, selectContent())
  }

  const subtractSelect = () => {
    const newSelect = select - 1;
    setSelect(newSelect, selectContent())
  }

  const selectContent = () => {
    if (select === 1) {
      dispatch({ type: SET_SKILLS });
    } else if (select === 2) {
      dispatch({ type: SET_PROJECTS });
    } else if (select === 3) {
      dispatch({ type: SET_ABOUT_ME })
    }
  };

  return (
    <main className='app-container'>
      <Main 
        title={state.title}
        description={state.description}
      />
      <Side 
        content={select}
        onClick={selectContent}
        addSelect={addSelect}
        subtractSelect={subtractSelect}
      />
    </main>
  );
}

export default App;
