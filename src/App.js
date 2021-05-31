import React, {Component} from 'react';
import HorizontalList from './components/main/HorizontalList';
import './App.css';
import Nav from './components/shared/Nav';
import SearchBar from './components/shared/Search';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Loader from './components/shared/Loader';
import SingleMovie from './components/main/SingleMovie';
import Home from './components/main/Home';

const apiKey = "a307e8eddfmsh2a33e3d638138dcp17c32cjsne44e5a3808fc";
const apiHost = "imdb-internet-movie-database-unofficial.p.rapidapi.com";

class App extends Component {

    state = {
        movies: [],
        selected: '',
        searchTerm:'',
    }

    searchMovie = (searchTerm)=>{
   
        fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchTerm}`,
        {
            method:'GET',
            headers:{
                "x-rapidapi-key":apiKey,
                "x-rapidapi-host": apiHost,
                "useQueryString": true
            }
         }
        )
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({movies: data.titles})
        })
        .catch(console.log)
            return null;
    }

    handleCallback = (term) =>{
      this.setState({searchTerm: term})
      this.searchMovie(term)
   
    }

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
