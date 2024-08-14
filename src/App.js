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
            <Route path="/B-movies" element={<Home/>}/>
                
            
            <Route  path="/B-movies/movie/:movieId" element={<div>
                    <Nav/>
                    <SingleMovie/>
                </div>}/>
              
            <Route path="*" element={<div className= "text-center heading">Page not found.
                <Link to="/B-movies">
                 Go  home
                </Link></div>}/>
            </Routes>

            </div>
            </Router>
        )
    }

}

export default App;
