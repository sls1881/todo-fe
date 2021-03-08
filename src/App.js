import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React, { Component } from 'react'
import Header from './Components/Headers.js'
import HomePage from './Home/HomePage.js'
import SignUpPage from './AuthPages/SignUpPage.js'
import LoginPage from './AuthPages/LoginPage.js'
import TodosListPage from './TodosListPage/TodosListPage.js'
import { getUserFromLocalStorage, setUserToLocalStorage } from './LocalStorageUtils';
import PrivateRoute from './Components/PrivateRoute.js'

export default class App extends Component {
  //Initialize state
  state = {
    user: getUserFromLocalStorage()
  }

  //handle the user changes
  handleUserChange = (user) => {
    this.setState({ user })
    setUserToLocalStorage(user);
  }

  //Handle logout change
  handleLogout = () => {
    this.handleUserChange();
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          {/* Header points to home and search, should be under router and above switch */}
          <Header user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <PrivateRoute
              path="/todos"
              exact
              token={user && user.token}
              render={(routerProps) => <TodosListPage user={this.state.user} {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
