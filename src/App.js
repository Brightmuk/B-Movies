import React, {Component} from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import SingleMovie from './components/main/SingleMovie';
import Home from './components/main/Home';
import firebase from "firebase";

class App extends Component {
  

    render() {
       
        return (
            <Router>

            <div className ="page-container">
            <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route  path="/movie/:movieId">
                <div>
                    <Nav/>
                    <SingleMovie/>
                </div>
               
            </Route>

            <Route path="*">
                <div className= "text-center heading">Page not found.
                <Link to="/">
                 Go  home
                </Link></div>
                
            </Route>
            </Switch>

            </div>
            </Router>
        )
    }

}

export default App;
