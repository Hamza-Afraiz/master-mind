import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import {Header,Rules,ColorCircle} from './components'
import {RowsContainer} from './containers';
import ReactDOM from 'react-dom';
function App(props) {
  const [newState,setNewState]=useState(0);
  const setState=()=>{
    setNewState(1);
    console.log('re rendere')
    props.onPress() 

  }

  return (
    <div className="App">
      <Header/>
      <Rules/>
      {newState === 0 ?<RowsContainer onPress={setState}/>:<RowsContainer onPress={setState}/>}
      
     
    </div>
  );
}

export default App;
