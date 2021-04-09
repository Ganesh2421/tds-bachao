import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './login.js';
import { AuthProvider } from "./auth.js";
import Register from './register_page.js';

function App() {
  return (
    <>
      <Router>
      <AuthProvider>
        <Switch>
          <Route path='/tdsbachao/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/register_page' component={Register} />

          

        </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
