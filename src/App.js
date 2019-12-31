import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from './component/Header'
import Home from './component/Home'


const App = (props) => {
  return (
    <div className="App">
      <Header appName={props.appName}></Header>
      <Home/>
    </div>
  );
}


const mapState = (state, ownProps) => (
  { appName: state.appName
  }
)


const mapDispatch =
  {
  }


export default connect
  ( mapState
  , mapDispatch
  )
  (App);
