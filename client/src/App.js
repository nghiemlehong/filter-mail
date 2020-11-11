import React from 'react'
import './App.css'
import { Login } from './page/Login'
import {Signup} from './page/Signup'
import {Home} from './page/Home'
import { BrowserRouter as Router, Redirect, Route,Switch } from 'react-router-dom'
import {NotificationContainer} from 'react-notifications'
import {getToken} from './utils/Common'

function App() {
  return (
    <div>
      <NotificationContainer/>
      <Router>
        <Switch>
            <Route path ='/'  exact render = {()=>getToken() ?  <Redirect to = '/home'/> : <Login/> } />
            <Route path ='/signup'  render = {()=>getToken() ?  <Redirect to = '/home'/> : <Signup/> }  />
            <Route path ='/home' component = {Home}  />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
