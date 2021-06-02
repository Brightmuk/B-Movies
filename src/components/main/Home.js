import React from 'react';
import HorizontalList from '../main/HorizontalList';
import './Home.css';
import SearchBar from '../shared/Search';
import {useState} from 'react';
import useFetch from '../../services/UseFetch';

const Home = (props)=> {
    let [searchTerm, setSearchTerm] = useState('');
    let [movies, setMovies] = useState([])
    let [loading, setLoading] = useState(false);

        // const popularSearches = []
   const { data: popularSearches, error, isPending} = useFetch(null,true)

    const searchMovie = (searchTerm)=>{
        
        setLoading(true);
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
            
            setLoading(false);
            setMovies(data.titles??[])
        })
        .catch(console.log)
        setLoading(false);
            return null;

    }

    const handleCallback = (term) =>{
        setSearchTerm(term);
        if(term.length>1){
            searchMovie(term)
        } 
    }

        const movieList = searchTerm.length>1? movies.slice(0,3):popularSearches
        return (
            <div className="page-content">
                <div className="nav-logo text-center" >B Movies</div>
              
                <SearchBar searchCallback = {handleCallback} loading={loading}/>
                { searchTerm.length>1? <div className="heading ">RESULTS FOR "{searchTerm}"</div>:<div className="heading">POPULAR SEARCHES</div>}
            
               <HorizontalList movieList={movieList} />

                </div>

        )
    
}

export default Home;
