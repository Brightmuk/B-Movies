import React, {Component} from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import SingleMovie from './components/main/SingleMovie';
import Home from './components/main/Home';


class App extends Component {
  

    render() {
        return (
            <Router>
            <div className ="page-container">
            <Routes>
            <Route path="/" element={<Home/>}/>
                
            
            <Route  path="/movie/:movieId" element={<div>
                    <Nav/>
                    <SingleMovie/>
                </div>}/>
              
            <Route path="*" element={<div className= "text-center heading">Page not found.
                <Link to="/">
                 Go  home
                </Link></div>}/>
            </Routes>

            </div>
            </Router>
        )
    }

}

export default App;
