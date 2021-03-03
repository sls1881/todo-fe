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
import { setUserToLocalStorage } from './LocalStorageUtils';

export default class App extends Component {
  //Initialize state
  state = {
    id: '',
    email: '',
    token: ''
  }

  //handle the user changes
  handleUserChange = (user) => {
    this.setState({ user })
    setUserToLocalStorage(user);
  }

  //Handle logout change

  render() {
    return (
      <div>
        <Router>
          {/* Header points to home and search, should be under router and above switch */}
          <Header />
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
              render={(routerProps) => <LoginPage {...routerProps} />}
            />
            <Route
              path="/todos"
              exact
              render={(routerProps) => <TodosListPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
