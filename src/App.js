import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import {Header,Rules} from './components'
import {RowsContainer} from './containers';

function App(props) {

 

  return (
    <div className="App">
      <Header/>
      <Rules/>
      <RowsContainer/>
      
     
    </div>
  );
}

export default App;
