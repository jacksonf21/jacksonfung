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
import Header from './components/header.component';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    title: null,
    description: null,
    sideName: ''
  });

  const [select, setSelect] = useState(0);

  useEffect(() => {
    dispatch({ type: SET_DEFAULT });
  },[]);

  useEffect(() => {
    const selectContent = () => {
      if (select === 0) {
        dispatch({ type: SET_DEFAULT });
      } else if (select === 1) {
        dispatch({type: SET_SKILLS});
      } else if (select === 2) {
        dispatch({ type: SET_PROJECTS });
      } else if (select === 3) {
        dispatch({ type: SET_ABOUT_ME });
      }
    };
    selectContent();
  },[select])

  const addSelect = () => {
    if (select === 3) return;
    setSelect(select => select + 1)
  }

  const subtractSelect = () => {
    if (select === 0) return;
    setSelect(select => select - 1)
  }

  return (
    <>
    <Header />
    <main className='app-container'>
      <Main 
        title={state.title}
        description={state.description}
      />
      <Side 
        sideName={state.sideName}
        content={select}
        addSelect={addSelect}
        subtractSelect={subtractSelect}
      />
    </main>
    </>
  );
}

export default App;
