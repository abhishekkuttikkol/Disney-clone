import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Details from './components/Details';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/detail/:id">
            <Details/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        <Route path="/">
            <Login/>
          </Route>
          
        </Switch>
      </Router>
        
  
    </div>
  );
}

export default App;
