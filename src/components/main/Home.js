import React, { useEffect } from 'react';
import HorizontalList from '../main/HorizontalList';
import './Home.css';
import SearchBar from '../shared/Search';
import { useState } from 'react';
import FirebaseService from '../../services/Firebase';


const Home = (props) => {
    let [searchTerm, setSearchTerm] = useState('');
    let [movies, setMovies] = useState([])
    let [loading, setLoading] = useState(false);
    const [popular, setPopular] = useState([]);

    const getPopular = async () => {
        var results = await FirebaseService.getPopularSearches()

        setPopular(results);
    }
    useEffect(() => {
        getPopular()
    }, [])
    const searchMovie = (searchTerm) => {

        setLoading(true);
        fetch(`https://imdb8.p.rapidapi.com/v2/search?searchTerm=${searchTerm}`,
            {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
                    "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
                    "useQueryString": true
                }
            }
        )
            .then(res => res.json())
            .then((data) => {
                console.log(data['data']['mainSearch']['edges'])
                setLoading(false);


                var list = data['data']['mainSearch']['edges']
                var formated = list.map((movie) => {
                    console.log(movie)
                    return {
                        'title': movie.node.entity.originalTitleText.text,
                        'image': movie.node.entity.primaryImage.url,
                        'id': movie.node.entity.id,
                    }
                });
                setMovies(formated)


            })
            .catch(console.log)
        setLoading(false);
        return null;

    }

    const handleCallback = (term) => {
        setSearchTerm(term);
        if (term.length > 1) {
            searchMovie(term)
        }
    }

    const movieList = searchTerm.length > 1 ? movies.slice(0, 3) : popular
    return (
        <div className="page-content">
            <div className="nav-logo text-center" >B Movies</div>

            <SearchBar searchCallback={handleCallback} loading={loading} />
            {searchTerm.length > 1 ? <div className="heading ">RESULTS FOR "{searchTerm}"</div> : <div className="heading">POPULAR SEARCHES</div>}

            <HorizontalList movieList={movieList} />

        </div>

    )

}

export default Home;
