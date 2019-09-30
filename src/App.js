import React, { useState, useMemo } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();



  return (
    <div className="App" >
      <header className="App-header"></header>
      <h1>Counter: {counter}</h1>
      <button className='button-success' onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <br />
      <button className='button-error' onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    </div >
  );
}

export default App;
