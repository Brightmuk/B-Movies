import React from 'react'
import { Link, useParams } from "react-router-dom";
import useFetch from '../../services/UseFetch';
import Loader from '../shared/Loader';
import './SingleMovie.css';
import FirebaseService from '../../services/Firebase';
import {useNavigate } from 'react-router-dom';


const SingleMovie = () => {

    const {movieId}= useParams()
    const { data:movie, error, isPending} = useFetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+movieId)
    const navigate = useNavigate()
    
    const newPopularSearch = async()=>{
        FirebaseService.newPopularSearch(movie)
    }
    const goHome=()=>{
       
        navigate('/')
    }
   
    return ( 
        <div className="single-movie">
            <div className="page-nav">
                <div className="path">Path </div>
                <div onClick = {goHome}  className="path-link">Home</div>
                {movie!=null&&<div className="path-name">| {movie.title}</div>}
            </div>

            <br/>
            {error && <div className="movie-plot">{error}</div>}
            {!isPending?
            <div className="movie">
                <div className = "movie-poster">
                    <img className="img" src={movie.poster}></img>
                </div>
            <div className = "movie-details">
                <div className = "movie-header">
                <div className= "movie-title">{movie.title}</div>
                <div className= "movie-trailer" onClick={newPopularSearch}><a target="blank" href={movie.trailer.link}>TRAILER</a></div>
                </div>
              
                <div className="movie-plot">{movie.plot}</div>
                {movie.cast.length>1?
                                <div className="movie-actors">
                                <span className="leading">TOP CHARACTERS</span>
                                <div className="actor"><b>{movie.cast[0].character}</b> - {movie.cast[0].actor}</div>
                                <div className="actor"><b>{movie.cast[1].character}</b> - {movie.cast[1].actor}</div>
                                <div className="actor"><b>{movie.cast[2].character}</b> - {movie.cast[2].actor}</div>
                            </div>:<div></div>
                }

                <div className="movie-footer">
                <div className="movie-length"><span className="leading">LENGTH</span> {movie.length}</div>
                    <div className="movie-year"><span className="leading">YEAR</span> {movie.year}</div>
                    <div className="movie-rating"><span className="leading">RATING</span> {movie.rating}</div></div>
            </div>  
            </div>
            :
            <div className="movie">
            <div className = "movie-poster shimmer">
                
            </div>
        <div className = "movie-details ">
            <div className = "movie-header shimmer">
            <div className= "movie-title "></div>
            <div className= "movie-trailer" onClick={newPopularSearch}><a target="blank" ></a></div>
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
