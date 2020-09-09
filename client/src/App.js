import React from 'react';
import Posts from './Posts';
import NavigationMenu from './NavigationMenu';
import './App.css';
import Jobs from './Jobs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <NavigationMenu />
        <Switch>
          <Route path="/" exact>
            <Posts />
          </Route>
          <Route path="/jobs" exact>
            <Jobs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
