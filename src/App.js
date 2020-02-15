import React from 'react';
import './App.css';
import Header from './component/Header'
import Home from './component/Home'


const App = props => {
  return (
    <div className="App">
      <Header appName={props.name}></Header>
      <Home />
    </div>
  );
}


export default App
