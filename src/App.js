import React, {Component} from 'react';
import HorizontalList from './components/main/HorizontalList';
import './App.css';
import Nav from './components/shared/Nav';
import SearchBar from './components/shared/Search';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Loader from './components/shared/Loader';
import SingleMovie from './components/main/SingleMovie';
import Home from './components/main/Home';


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
