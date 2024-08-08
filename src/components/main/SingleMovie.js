import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import useFetch from '../../services/UseFetch';
import Loader from '../shared/Loader';
import './SingleMovie.css';
import FirebaseService from '../../services/Firebase';
import { useNavigate } from 'react-router-dom';


const SingleMovie = () => {

    const { movieId } = useParams()
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const [plot, setPlot] = useState('');
    const [cast, setCast] = useState([])

    useEffect(() => {
        getMovie();
        getPlot();
        getCast();
    }, [])
    const getMovie =  () => {

        fetch("https://imdb8.p.rapidapi.com/title/v2/get-details?tconst=" + movieId,
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
                console.log(data)
                
                setMovie(data['data']['title'])
            })
            .catch(console.log)
        // setLoading(false);
        return null;
    }
    const getPlot =  () => {

        fetch("https://imdb8.p.rapidapi.com/title/v2/get-plot?tconst=" + movieId,
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
                console.log(data)
                
                setPlot(data.data.title.plot.plotText.plainText)
            })
            .catch(console.log)

        return null;
    }
    const getCast =  () => {

        fetch("https://imdb8.p.rapidapi.com/title/v2/get-top-cast-and-crew?tconst=" + movieId,
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
                console.log(data.data.title.credits.edges)
                setLoading(false);
                setCast(data.data.title.credits.edges)
            })
            .catch(console.log)

        return null;
    }
    const navigate = useNavigate()

    const newPopularSearch = async () => {
        FirebaseService.newPopularSearch(movie)
    }
    const goHome = () => {

        navigate('/')
    }

    return (
        <div className="single-movie">
            <div className="page-nav">
                <div className="path">Path </div>
                <div onClick={goHome} className="path-link">Home</div>
                {movie != null && <div className="path-name">| {movie.titleText.text}</div>}
            </div>

            <br />

            {movie!=null&&plot!=null ?
                <div className="movie">
                    <div className="movie-poster">
                        <img className="img" src={movie.primaryImage.url}></img>
                    </div>
                    <div className="movie-details">
                        <div className="movie-header">
                            <div className="movie-title">{movie.titleText.text}</div>
                            <div className="movie-trailer" onClick={newPopularSearch}><a target="blank" href={movie.officialLinks.edges[0]}>TRAILER</a></div>
                        </div>

                        <div className="movie-plot">{plot}</div>
                {cast.length>1?
                                <div className="movie-actors">
                                <span className="leading">TOP CHARACTERS</span>
                               
                                {cast.map((character)=>(
                                     <div className="actor"><b>{character.node.characters[0].name}</b> - {character.node.name.nameText.text}</div>
                                ))}
                               
                                
                            </div>:<div></div>
                }

                        <div className="movie-footer">
                            <div className="movie-length"><span className="leading">LANGUAGE</span> {movie.spokenLanguages.spokenLanguages[0].text}</div>
                            <div className="movie-year"><span className="leading">YEAR</span> {movie.releaseDate.year}</div>
                            <div className="movie-rating"><span className="leading">COUNTRY</span> {movie.countriesOfOrigin.countries[0].text}</div></div>
                    </div>
                </div>
                :
                <div className="movie">
                    <div className="movie-poster shimmer">

                    </div>
                    <div className="movie-details ">
                        <div className="movie-header shimmer">
                            <div className="movie-title "></div>
                            <div className="movie-trailer" onClick={newPopularSearch}><a target="blank" ></a></div>
                        </div>

                        <div className="movie-plot shimmer"></div>
                        <div className="movie-actors shimmer">
                            <span className="leading"></span>
                            <div className="actor shimmer"></div>
                            <div className="actor shimmer"></div>
                            <div className="actor shimmer"></div>
                        </div>

                        <div className="movie-footer shimmer">
                            <div className="movie-length"><span className="leading"></span> </div>
                            <div className="movie-year"><span className="leading"></span></div>
                            <div className="movie-rating"><span className="leading"></span></div></div>
                    </div>
                </div>
            }

        </div>
    );
}

export default SingleMovie;
