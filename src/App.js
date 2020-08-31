import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './component/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/campaigns" component={Home}/>
        <Redirect to="/campaigns"/>
      </Switch>
    </Router>
  )
}

export default App;