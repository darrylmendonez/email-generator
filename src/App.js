import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import EmailDetails from './components/emails/EmailDetails'
import LogIn from './components/auth/LogIn'
import Register from './components/auth/Register'
import CreateEmail from './components/emails/CreateEmail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/email/:id' component={EmailDetails} />
            <Route path='/login' component={LogIn} />
            <Route path='/register' component={Register} />
            <Route path='/create' component={CreateEmail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
