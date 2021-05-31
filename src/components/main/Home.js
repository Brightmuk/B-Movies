import React, {Component} from 'react';
import HorizontalList from '../main/HorizontalList';
import './Home.css';
import Nav from '../shared/Nav';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Loader from '../shared/Loader';
import SingleMovie from '../main/SingleMovie';
import SearchBar from '../shared/Search';


class Home extends Component {

    state = {
        movies: [],
        selected: '',
        searchTerm:'',
        loading:false
    }

    searchMovie = (searchTerm)=>{
        this.setState({loading:true});
        fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchTerm}`,
        {
            method:'GET',
            headers:{
                "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY,
                "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
                "useQueryString": true
            }
         }
        )
        .then(res => res.json())
        .then((data) => {
            
            this.setState({movies: data.titles, loading:false})
        })
        .catch(console.log)
        this.setState({loading:false})
            return null;

    }

    handleCallback = (term) =>{
      this.setState({searchTerm: term})
      this.searchMovie(term)
   
    }

    render() {
     
        return (
            <div class="page-content">
                <div class="nav-logo text-center" >B Movies</div>
                <SearchBar searchCallback = {this.handleCallback} loading={this.state.loading}/>
                { this.state.searchTerm.length>1? <div class="heading ">RESULTS FOR "{this.state.searchTerm}"</div>:<div class="heading">POPULAR SEARCHES</div>}
               {this.state.searchTerm.length>1?
               <HorizontalList movies={this.state.movies} />
                :
              <div >

                  </div>
                }
                </div>

        )
    }
}

export default Home;
