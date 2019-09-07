import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AddEmployee from './pages/AddEmployee'
import EmployeeProfile from './pages/EmployeeProfile'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/add_employee" component={AddEmployee}></Route>
          <Route
            exact
            path="/employee/:employeeId"
            component={EmployeeProfile}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
