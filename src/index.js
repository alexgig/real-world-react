import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, NavLink, useParams} from 'react-router-dom'
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
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
          <NavLink to="/test">Test</NavLink>
          <NavLink to="/test/23">Test id</NavLink>
          <NavLink to="/">Home</NavLink>
          <Switch>
            <Route path="/test/:id" children={<TestId/>} />
            <Route path="/test">
              <h1>Test</h1>
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    , document.getElementById('root')
    )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

