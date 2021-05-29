import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom";
import useFetch from '../../services/UseFetch';
import Loader from '../shared/Loader';
import Nav from '../shared/Nav';
import './SingleMovie.css';


const SingleMovie = () => {

    const {movieId}= useParams()
    const { data:movie, error, isPending} = useFetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+movieId)

    return ( 
        <div className="single-movie">
            <div className="page-nav">
                <div className="path">Path </div>
                <Link className="path-link" to="/">
                Home
                </Link>
                {movie!=null&&<div className="path-name">| {movie.title}</div>}
            </div>

            <br/>
            {error && <div>{error}</div>}
            {movie!=null?
            <div className="movie">
                <div className = "movie-poster">
                    <img className="img" src={movie.poster}></img>
                </div>
            <div className = "movie-details">
                <div className= "movie-title">{movie.title}</div>
                <div className="movie-plot">{movie.plot}</div>
                <div className="movie-footer">
                    <div classname="movie-year">{movie.year}</div>
                    <div className="movie-rating">{movie.rating}</div>
                </div>
            </div>  
            </div>
            :<Loader/>
            }

        </div>
     );
}
 
export default SingleMovie;
