import React from 'react'
import './App.css'
import { Login } from './page/Login'
import {Signup} from './page/Signup'
import {Home} from './page/Home'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path ='/'  exact component = {Login} />
            <Route path ='/signup'  component = {Signup} />
            <Route path ='/home'  component = {Home} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
