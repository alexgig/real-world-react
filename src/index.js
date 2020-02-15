import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, useParams} from 'react-router-dom'
import './index.css';
import App from './App';
import { store } from './store'


const TestId = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>Test: {params.id}</div>
  )
}


ReactDOM.render
    ( <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/test/:id">
              <TestId/>
            </Route>
            <Route path="/test">
              <h1>Test</h1>
            </Route>
            <Route path="/">
              <App name="Github Explorer"/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    , document.getElementById('root')
    )
